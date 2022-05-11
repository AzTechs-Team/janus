package controller

import (
	"fmt"

	fiber "github.com/gofiber/fiber/v2"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/models"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)

// type user struct {
// 	Name         string `bson:"name,omitempty"`
// 	Email        string `bson:"email"`
// 	Phone        int    `bson:"phone"`
// 	Password     string `bson:"password"`
// 	AccessToken  string `bson:"accesstoken,omitempty"`
// 	RefreshToken string `bson:"refreshToken,omitempty"`
// }

func Register(ctx *fiber.Ctx) error {
	// var data map[string]string
	temp := models.User{}
	if err := ctx.BodyParser(&temp); err != nil {
		return err
	}
	fmt.Println(temp)
	password_, _ := bcrypt.GenerateFromPassword([]byte(temp.Password), 14)
	password := string(password_[:])
	user := models.User{
		Name:     temp.Name,
		Email:    temp.Email,
		Phone:    temp.Phone,
		Password: password,
	}
	userAdded, err := connect.Collection.InsertOne(connect.Ctx_, user)
	if err != nil {
		panic(err)
		var duplicate bool = mongo.IsDuplicateKeyError(err)
		if duplicate {
			return ctx.Status(fiber.StatusBadRequest).SendString("The Email id already exists!")
		}
	}
	// createUser(ctx, user, collection)'

	return ctx.JSON(userAdded)
}

func panic(err error) {
	fmt.Println(err)
}

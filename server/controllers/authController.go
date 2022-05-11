package controller

import (
	"fmt"

	fiber "github.com/gofiber/fiber/v2"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/models"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)

func Register(ctx *fiber.Ctx) error {
	var data map[string]string
	if err := ctx.BodyParser(&data); err != nil {
		return err
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Phone:    data["phone"],
		Password: password,
	}
	userAdded, err := connect.Collection.InsertOne(connect.Ctx_, user)
	if err != nil {
		var duplicate bool = mongo.IsDuplicateKeyError(err)
		if duplicate {
			return ctx.Status(fiber.StatusBadRequest).SendString("The Email id already exists!")
		}
	}
	// createUser(ctx, user, collection)

	return ctx.JSON(userAdded)
}

func log(str string) {
	fmt.Println(str)
}

func panic(err error) {
	fmt.Println(err)
}

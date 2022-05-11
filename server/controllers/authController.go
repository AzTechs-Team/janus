package controller

import (
	"fmt"

	fiber "github.com/gofiber/fiber/v2"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)

func Register(ctx *fiber.Ctx) error {
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

	return ctx.JSON(userAdded)
}

func Login(ctx *fiber.Ctx) error {
	temp := models.User{}
	if err := ctx.BodyParser(&temp); err != nil {
		return err
	}

	var user models.User

	filter := bson.D{{"email", temp.Email}}

	err_ := connect.Collection.FindOne(connect.Ctx_, filter).Decode(&user)
	if err_ != nil {
		panic(err_)
		return err_
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(temp.Password)); err != nil {
		ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Incorrect Password",
		})
	}
	return ctx.JSON(fiber.Map{
		"message": "Access Granted",
	})
}

func panic(err error) {
	fmt.Println(err)
}

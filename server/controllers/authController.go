package controller

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/models"
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
		panic(err)
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

package controller

import (
	"fmt"
	"strings"

	"time"

	"github.com/dgrijalva/jwt-go/v4"
	fiber "github.com/gofiber/fiber/v2"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/models"
	"github.com/nimit2801/janus/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)

func Register(ctx *fiber.Ctx) error {
	user := new(models.User)
	if err := ctx.BodyParser(&user); err != nil {
		return err
	}
	fmt.Println(user)
	password_, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
	password := string(password_[:])
	user.Password = password
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
		return ctx.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Incorrect Password",
		})
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    user.ID.Hex(),
		ExpiresAt: jwt.NewTime(float64(time.Now().Add(time.Hour * 24).Unix())), // One Day
	})

	token, err := claims.SignedString([]byte(connect.SecretKey))

	if err != nil {
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Internal Server Error, login not successful",
		})
	}

	cookie := fiber.Cookie{
		Name:     "accessToken",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}

	ctx.Cookie(&cookie)

	// return ctx.JSON(fiber.Map{
	// 	"message": "successful",
	// })
	return ctx.JSON(user)
}

func Logout(ctx *fiber.Ctx) error {
	cookie := fiber.Cookie{
		Name:     "accessToken",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}

	ctx.Cookie(&cookie)

	return ctx.JSON(fiber.Map{
		"message": "user logged out",
	})
}

// this controller for user can act as home page or something :D

func User(ctx *fiber.Ctx) error {
	cookie := ctx.Cookies("accessToken")

	if len(cookie) == 0 {
		return ctx.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "You're not authourized",
		})
	}
	ID := utils.StringID(cookie)

	var user models.User

	filter := bson.D{{"_id", ID}}

	err_ := connect.Collection.FindOne(connect.Ctx_, filter).Decode(&user)
	if err_ != nil {
		panic(err_)
		return err_
	}

	return ctx.Status(200).JSON(user)
	// return ctx.SendString("We're working <3")
}

func ManageExtensions(ctx *fiber.Ctx) error {
	cookie := ctx.Cookies("accessToken")

	if len(cookie) == 0 {
		return ctx.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "You're not authourized",
		})
	}
	ID := utils.StringID(cookie)
	var user models.User
	filter := bson.D{{"_id", ID}}
	ext := ctx.Query("extension")
	splitExt := strings.Split(ext, ",")

	fmt.Println(ext, "ext")
	fmt.Println(splitExt, "split")
	result, err_ := connect.Collection.UpdateOne(connect.Ctx_, filter, bson.D{
		{"$set", bson.D{{"extensionList", splitExt}}},
	})
	if err_ != nil {
		panic(err_)
		return err_
	}

	fmt.Println("fldskjflksadjflks", result)
	return ctx.Status(200).JSON(user)
}

func panic(err error) {
	fmt.Println(err)
}

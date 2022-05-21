package controller

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	// main "github.com/nimit2801/janus"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/models"
	"github.com/nimit2801/janus/utils"
	"go.mongodb.org/mongo-driver/bson"
)

type Q struct{}

func GithubPayload(ctx *fiber.Ctx) error {
	var notif map[string]interface{}
	if err := ctx.BodyParser(&notif); err != nil {
		fmt.Print("error hai :D")
	}
	fmt.Println(notif["action"])
	// new_ := notif["action"]
	ans, err := json.MarshalIndent(&notif, "", "    ")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(ans))
	// main.CC.WriteMessage(1, make([]byte, 4))
	return ctx.SendString("we did")
}

func CreateNewTodoGroup(ctx *fiber.Ctx) error {
	cookie := ctx.Cookies("accessToken")
	ID := utils.StringID(cookie)
	todoGroup := new(models.TodoGroup)
	if err := ctx.BodyParser(&todoGroup); err != nil {
		return err
	}

	todoGroup.UserId = ID
	todoGroup.CreatedAt = time.Now().UTC().Unix()

	TodogroupId, err := connect.TodoGroupCollection.InsertOne(connect.Ctx_, &todoGroup)

	if err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "we good",
		})
	}

	return ctx.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "we good",
		"id":      TodogroupId,
	})
}

// Todo: Read, Updade, Delete :D

func ReadAllTodogroup(ctx *fiber.Ctx) error {
	cookie := ctx.Cookies("accessToken")
	ID := utils.StringID(cookie)

	TodoGroups := []models.TodoGroup{}

	filter := bson.M{"userId": ID}

	filterCursor, err := connect.TodoGroupCollection.Find(connect.Ctx_, filter)
	if err != nil {
		panic(err)
	}
	if err = filterCursor.All(connect.Ctx_, &TodoGroups); err != nil {
		log.Fatal(err)
	}
	if err != nil {
		panic(err)
	}
	return ctx.Status(fiber.StatusAccepted).JSON(TodoGroups)
	// return ctx.SendString("We're working <3")
}

// Todo Update Single Todo Group

// func UpdateSingleTodogroup(ctx *fiber.Ctx) error {
// 	cookie := ctx.Cookies("accessToken")
// 	ID := utils.StringID(cookie)

// 	TodoGroup := models.TodoGroup{}
// 	if err := ctx.BodyParser(&TodoGroup); err != nil {
// 		return err
// 	}
// 	ID_ := TodoGroup.ID
// 	filter := bson.M{"_id": ID, "userId": ID_}

// 	singleResult := connect.TodoGroupCollection.FindOneAndUpdate(connect.Ctx_, filter, TodoGroup)

// 	return ctx.Status(fiber.StatusAccepted).JSON(singleResult)
// 	// return ctx.SendString("We're working <3")
// }

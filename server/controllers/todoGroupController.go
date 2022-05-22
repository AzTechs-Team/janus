package controller

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"

	// main "github.com/nimit2801/janus"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/models"
	"github.com/nimit2801/janus/utils"
	"go.mongodb.org/mongo-driver/bson"
)

type Q struct{}
type websocketsConnections struct {
	c        *websocket.Conn
	clientId string
}

// Dynamic link
// /api/Payload/clientId

var CC = []*websocketsConnections{}

var ws_ *fiber.Ctx

func GithubPayload(ctx *fiber.Ctx) error {
	var notif map[string]interface{}
	if err := ctx.BodyParser(&notif); err != nil {
		fmt.Print("error hai :D")
	}
	// we have clientId here
	fmt.Println(notif["action"])
	// new_ := notif["action"]
	// ans, err := json.MarshalIndent(&notif, "", "    ")
	// if err != nil {
	// 	panic(err)
	// }
	// fmt.Println(string(ans))
	fmt.Println(&CC)
	// CC.WriteMessage(1, ans)

	return ctx.SendString("we did")
}

var Ws_ = websocket.New(func(c *websocket.Conn) {
	log.Println("New Client connected :)")
	log.Println(c.Locals("allowed"))       // true
	log.Println(c.Params("id", "123"))     // 123
	log.Println(c.Query("v"))              // 1.0
	log.Println(c.Cookies("access-token")) // ""
	var (
		mt  int
		msg []byte
		err error
	)

	// CC = append(CC, c)

	// fmt.Println(, "are we here?")
	for {
		mt, msg, err = c.ReadMessage()
		if err != nil {
			panic(err)
		}
		var jsonMap map[string]string
		json.Unmarshal([]byte(msg), &jsonMap)
		ans, err := json.MarshalIndent(&jsonMap, "", "    ")
		if err != nil {
			panic(err)
		}
		if len(jsonMap["clientId"]) != 0 {
			clientId := jsonMap["clientId"]
			cc := new(websocketsConnections)
			cc.c = c
			fmt.Println(clientId)
			cc.clientId = clientId
			url := "http://b397-103-240-207-189.ngrok.io" + "/api/Payload/" + clientId
			c.WriteMessage(mt, []byte(url))
			CC = append(CC, cc)
		}
		log.Println("message from user:")
		fmt.Println(string(ans))

	}
})

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

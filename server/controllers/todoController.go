package controller

import (
	"time"

	"github.com/gofiber/fiber/v2"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/models"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func CreateNewTodo(ctx *fiber.Ctx) error {
	childTodo := models.Todo{
		Value:     "Wanna do jiggle jiggle",
		IsDone:    false,
		CreatedAt: time.Now().UTC().Unix(),
	}
	id := primitive.ObjectID{}
	temp := models.TodoGroup{
		UserId:    id,
		Title:     "Daily Chores",
		Todos:     []models.Todo{childTodo},
		CreatedAt: time.Now().UTC().Unix(),
	}

	TodogroupId, err := connect.TodoGroupCollection.InsertOne(connect.Ctx_, &temp)

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

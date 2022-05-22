package controller

import (
	"log"
	"time"

	"github.com/gofiber/fiber/v2"

	// main "github.com/nimit2801/janus"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/models"
	"github.com/nimit2801/janus/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateNewNote(ctx *fiber.Ctx) error {
	cookie := ctx.Cookies("accessToken")
	ID := utils.StringID(cookie)
	Note := new(models.Note)
	if err := ctx.BodyParser(&Note); err != nil {
		return err
	}

	Note.UserId = ID
	Note.CreatedAt = time.Now().UTC().Unix()

	NoteId, err := connect.NoteCollection.InsertOne(connect.Ctx_, &Note)

	if err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "we good",
		})
	}

	return ctx.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "we good",
		"id":      NoteId,
	})
}

func ReadAllNote(ctx *fiber.Ctx) error {
	cookie := ctx.Cookies("accessToken")
	ID := utils.StringID(cookie)

	Notes := []models.Note{}

	filter := bson.M{"userId": ID}

	filterCursor, err := connect.NoteCollection.Find(connect.Ctx_, filter)
	if err != nil {
		panic(err)
	}
	if err = filterCursor.All(connect.Ctx_, &Notes); err != nil {
		log.Fatal(err)
	}
	if err != nil {
		panic(err)
	}
	return ctx.Status(fiber.StatusAccepted).JSON(Notes)
}

func UpdateSingleNote(ctx *fiber.Ctx) error {

	Note := models.Note{}
	if err := ctx.BodyParser(&Note); err != nil {
		return err
	}
	ID_ := Note.ID
	filter := bson.M{"_id": ID_}
	// update := bson.D{}
	update := bson.D{
		{"$set", bson.D{{"title", Note.Title}}},
		{"$set", bson.D{{"description", Note.Description}}},
	}
	singleResult, err := connect.NoteCollection.UpdateOne(connect.Ctx_, filter, update)
	if err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
	}

	return ctx.Status(fiber.StatusAccepted).JSON(singleResult)
	// return ctx.SendString("We're working <3")
}

func DeleteSingleNote(ctx *fiber.Ctx) error {
	Note := models.Note{}
	if err := ctx.BodyParser(&Note); err != nil {
		return err
	}
	ID_ := Note.ID
	filter := bson.M{"_id": ID_}
	var deletedDocument *mongo.DeleteResult
	deletedDocument, err := connect.NoteCollection.DeleteOne(connect.Ctx_, filter)
	if err != nil {
		panic(err)
	}

	return ctx.Status(fiber.StatusAccepted).JSON(deletedDocument)
}

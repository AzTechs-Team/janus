package routes

import (
	"github.com/gofiber/fiber/v2"
	controller "github.com/nimit2801/janus/controllers"
)

func Setup(app *fiber.App) {
	// Authentication
	app.Post("/api/Register", controller.Register)
	app.Post("/api/Login", controller.Login)
	app.Post("/api/Logout", controller.Logout)
	app.Get("/api/User", controller.User)
	app.Get("/api/Extensions", controller.ManageExtensions)

	// Todo Group
	app.Get("/api/TodoGroup", controller.ReadAllTodogroup)
	app.Post("/api/TodoGroup", controller.CreateNewTodoGroup)
	app.Put("/api/TodoGroup", controller.UpdateSingleTodogroup)
	app.Delete("/api/TodoGroup", controller.DeleteSingleTodoGroup)

	// Notes
	app.Get("/api/Note", controller.ReadAllNote)
	app.Post("/api/Note", controller.CreateNewNote)
	app.Put("/api/Note", controller.UpdateSingleNote)
	app.Delete("/api/Note", controller.DeleteSingleNote)

	// Microservice
	app.Get("/api/Services/CV/", controller.CVService)

	// websocket and pubsub setup
	app.Post("/api/Payload/:clientId", controller.GithubPayload)
	app.Get("/ws", controller.Ws_)
	app.Get("/", controller.Hello)
}

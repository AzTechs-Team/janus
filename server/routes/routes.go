package routes

import (
	"github.com/gofiber/fiber/v2"
	controller "github.com/nimit2801/janus/controllers"
)

func Setup(app *fiber.App) {
	app.Post("/api/Register", controller.Register)
	app.Post("/api/Login", controller.Login)
	app.Post("/api/Logout", controller.Logout)
	app.Get("/api/User", controller.User)
	app.Get("/api/Extensions", controller.ManageExtensions)
	app.Get("/api/TodoGroup", controller.ReadAllTodogroup)
	app.Post("/api/TodoGroup", controller.CreateNewTodoGroup)
	app.Put("/api/TodoGroup", controller.UpdateSingleTodogroup)
	app.Delete("/api/TodoGroup", controller.DeleteSingleTodoGroup)
	app.Get("/api/Services/CV/", controller.CVService)
	// app.Post("/api/Payload", controller.GithubPayload)
	app.Post("/api/Payload/:clientId", controller.GithubPayload)
	app.Get("/ws", controller.Ws_)
	app.Get("/", controller.Hello)
}

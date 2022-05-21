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
	app.Post("/api/TodoGroup", controller.CreateNewTodoGroup)
	app.Get("/api/TodoGroup", controller.ReadAllTodogroup)
	app.Get("/api/Services/CV/", controller.CVService)
	// app.Put("/api/TodoGroup", controller.UpdateSingleTodogroup)
	app.Post("/api/Payload", controller.GithubPayload)
	app.Get("/ws", controller.Ws_)
	app.Get("/", controller.Hello)
}

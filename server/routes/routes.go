package routes

import (
	"github.com/gofiber/fiber/v2"
	controller "github.com/nimit2801/janus/controllers"
)

func Setup(app *fiber.App) {
	app.Post("/api/Register", controller.Register)
	app.Post("/api/Login", controller.Login)
	app.Get("/", controller.Hello)
}

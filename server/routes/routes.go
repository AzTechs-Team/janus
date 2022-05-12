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
	app.Get("/", controller.Hello)
}

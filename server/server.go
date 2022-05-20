package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/routes"
)

func main() {
	fmt.Printf(connect.Stringiy)
	connect.ConnectPlease()
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
	// utils.CreateIndexEmail()
	app.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path}\n",
	}))
	routes.Setup(app)
	// controller.CreateNewTodo()
	app.Listen(":8082")

	// cog.Ggs3()
}

package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/routes"
)

func main() {
	fmt.Printf(connect.Stringiy)
	connect.ConnectPlease()
	app := fiber.New()

	// utils.CreateIndexEmail()
	app.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path}\n",
	}))
	routes.Setup(app)
	app.Listen(":8082")
}

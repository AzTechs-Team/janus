package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/routes"
)

func main() {
	fmt.Printf(connect.Stringiy)
	connect.ConnectPlease()
	app := fiber.New()

	// utils.CreateIndexEmail()
	routes.Setup(app)

	app.Listen(":8082")
}

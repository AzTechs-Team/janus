package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/routes"
)

func main() {
	fmt.Printf(connect.Stringiy)
	app := fiber.New()

	routes.Setup(app)

	app.Listen(":8082")
}

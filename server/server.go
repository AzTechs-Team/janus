package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/websocket/v2"
	connect "github.com/nimit2801/janus/database"
	"github.com/nimit2801/janus/routes"
)

var CC = new(websocket.Conn)

func main() {
	fmt.Printf(connect.Stringiy)
	connect.ConnectPlease()
	app := fiber.New()

	app.Use("/ws", func(ctx *fiber.Ctx) error {
		if websocket.IsWebSocketUpgrade(ctx) {
			ctx.Locals("allowed", true)
			return ctx.Next()
		}
		return fiber.ErrUpgradeRequired
	})
	app.Get("/ws", websocket.New(func(c *websocket.Conn) {
		// controller.GithubPayload(C)
		// c.Locals is added to the *websocket.Conn
		log.Println("New Client connected :)")
		log.Println(c.Locals("allowed"))  // true
		log.Println(c.Params("id"))       // 123
		log.Println(c.Query("v"))         // 1.0
		log.Println(c.Cookies("session")) // ""
		CC = c
		log.Println(CC, c)

		// websocket.Conn bindings https://pkg.go.dev/github.com/fasthttp/websocket?tab=doc#pkg-index
		var (
			mt  int
			msg []byte
			err error
		)
		// for {
		// 	log.Println("waiting for message from client")
		// 	if mt, msg, err = c.ReadMessage(); err != nil {
		// 		log.Println("read:", err)
		// 	}
		// 	log.Printf("recv: %s", msg)

		// 	if err = c.WriteMessage(mt, msg); err != nil {
		// 		log.Println("write:", err)
		// 		break
		// 	}
		// }
		for {
			mt, msg, err = c.ReadMessage()
			if err != nil {
				panic(err)
			}
			log.Println(mt, msg)
			c.WriteMessage(mt, msg)
			for i := 0; i < 5; i++ {
				CC.WriteMessage(mt, make([]byte, i))
				log.Println(mt, i)
			}
		}

	}))

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

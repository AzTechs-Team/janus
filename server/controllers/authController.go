package controller

import "github.com/gofiber/fiber/v2"

func Hello(ctx *fiber.Ctx) error {
	return ctx.SendString("Controller Working here 🌩️")
}

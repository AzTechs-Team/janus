package controller

import (
	fiber "github.com/gofiber/fiber/v2"
	cog "github.com/nimit2801/janus/services"
)

func CVService(ctx *fiber.Ctx) error {
	cookie := ctx.Cookies("accessToken")

	if len(cookie) == 0 {
		return ctx.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "You're not authourized",
		})
	}
	img := ctx.Query("img")
	res := cog.Ggs(img)

	return ctx.Status(200).JSON(res)
}

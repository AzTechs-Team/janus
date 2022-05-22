package controller

import (
	"encoding/json"
	"fmt"
	"log"

	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
	"github.com/nimit2801/janus/utils"
)

type websocketsConnections struct {
	c        *websocket.Conn
	clientId string
	online   bool
}

// var CC = []*websocketsConnections{}

// Dynamic link
// /api/Payload/clientId

func GithubPayload(ctx *fiber.Ctx) error {
	// fmt.Println(ctx.Params("clientId"))

	var notif map[string]interface{}
	if err := ctx.BodyParser(&notif); err != nil {
		fmt.Print("error hai :D")
	}
	// hookActiveCheck(notif)
	// we have clientId here
	// fmt.Println(notif["action"])
	// new_ := notif["action"]
	utils.PrettyJson(notif)
	// fmt.Println(CC[1].clientId)
	// CC.WriteMessage(1, ans)
	routerForGitHubPayloads(ctx.Params("clientId"), notif)

	return ctx.SendString("we did")
}

var CC = map[string]*websocketsConnections{}

var Ws_ = websocket.New(func(c *websocket.Conn) {
	log.Println("New Client connected :)")
	log.Println(c.Locals("allowed"))      // true
	log.Println(c.Params("id", "123"))    // 123
	log.Println(c.Query("v"))             // 1.0
	log.Println(c.Cookies("accessToken")) // ""
	var (
		mt  int
		msg []byte
		err error
	)
	defer func() {
		c.WriteMessage(websocket.CloseMessage, []byte("hello"))
		c.Close()
		log.Println("Connection was closed")
		checkConnections()
	}()
	var clientId string
	for {
		mt, msg, err = c.ReadMessage()
		fmt.Println(mt, msg)
		if mt == -1 {
			// delete(CC, clientId)
			// Make client offline :)
			CC[clientId].online = false
			CC[clientId].c = nil

			log.Println("Client Offline: " + clientId)
			log.Printf("%v %v\n", "any mem? ", CC[clientId].c)
			break
		}
		if err != nil {
			c.Close()
			panic(err)
		}
		var jsonMap map[string]string
		json.Unmarshal([]byte(msg), &jsonMap)
		ans, err := json.MarshalIndent(&jsonMap, "", "    ")
		if err != nil {
			panic(err)
		}
		if len(jsonMap["clientId"]) != 0 {
			clientId = jsonMap["clientId"]
			cc := new(websocketsConnections)
			cc.c = c
			fmt.Println(clientId)
			cc.clientId = clientId
			cc.online = true
			url := "http://26b9-8-28-82-78.ngrok.io" + "/api/Payload/" + clientId
			c.WriteMessage(mt, []byte(url))
			CC[clientId] = cc
			checkConnections()
		}
		log.Println("message from user:")
		fmt.Println(string(ans))
	}
})

func checkConnections() {
	for k, v := range CC {
		fmt.Println(k, "value is ", v.online)
	}
}

// func hookActiveCheck(notif map[string]interface{}) {
// 	var res map[string]interface{}
// 	res["hook_active"] = notif["hook"]
// 	res["repo"] = notif["repository"]
// }

func routerForGitHubPayloads(clientId string, notif map[string]interface{}) {
	_, found := CC[clientId]
	if found {
		if CC[clientId].online == true {
			log.Println("inside loop ", clientId)
			CC[clientId].c.WriteJSON(notif)
		} else {
			log.Println("Client is offline!")
		}
	} else {
		log.Println("Client is not registered!")
	}
}

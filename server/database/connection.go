package connect

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var collection *mongo.Collection
var ctx = context.TODO()
var Stringiy = "Hello World"

func init() {
	clientOptions := options.Client().ApplyURI("")
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	collection = client.Database("testDatabases").Collection("test")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Print("Connection secured!")
}

package connect

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func goDotEnvVariable(key string) string {

	// load .env file
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}

var Collection *mongo.Collection
var Ctx_ = context.TODO()
var Stringiy = "Hello World"
var SecretKey = goDotEnvVariable("SECRET-KEY")

func ConnectPlease() {
	MONGO_URI := goDotEnvVariable("MONGO_URI")
	clientOptions := options.Client().ApplyURI(MONGO_URI)
	client, err := mongo.Connect(Ctx_, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(Ctx_, nil)
	if err != nil {
		log.Fatal(err)
	}

	Collection = client.Database("testDatabases").Collection("test")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Print("Connection secured!")
}

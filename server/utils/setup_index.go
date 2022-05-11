package utils

import (
	"fmt"

	connect "github.com/nimit2801/janus/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func CreateIndexEmail() {
	indexModel := mongo.IndexModel{
		Keys: bson.M{
			"email": 1, // index in ascending order
		},
		Options: options.Index().SetUnique(true),
	}
	connect.Collection.Indexes().CreateOne(connect.Ctx_, indexModel)
}

func Panic(err error) {
	fmt.Println(err)
}

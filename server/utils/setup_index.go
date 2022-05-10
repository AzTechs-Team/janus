package utils

import (
	"fmt"

	connect "github.com/nimit2801/janus/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateIndexEmail() {
	indexModel := mongo.IndexModel{Keys: bson.M{
		"Email": 1, // index in ascending order
	}, Options: nil,
	}
	connect.Collection.Indexes().CreateOne(connect.Ctx_, indexModel)
}

func Panic(err error) {
	fmt.Println(err)
}

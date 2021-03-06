package utils

import (
	"encoding/json"
	"fmt"

	"github.com/dgrijalva/jwt-go/v4"
	connect "github.com/nimit2801/janus/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
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

func StringID(cookie string) primitive.ObjectID {
	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(connect.SecretKey), nil
	})

	claims := token.Claims.(*jwt.StandardClaims)
	ID, err := primitive.ObjectIDFromHex(claims.Issuer)
	if err != nil {
		Panic(err)
	}
	return ID
}

func PrettyJson(notif map[string]interface{}) {
	ans, err := json.MarshalIndent(&notif, "", "    ")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(ans))
	// return
}

func Panic(err error) {
	fmt.Println(err)
}

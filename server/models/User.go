package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	Id           primitive.ObjectID `bson:"id"`
	Name         string             `json:"name"`
	Email        string             `json:"email"`
	Phone        string             `json:"phone"`
	Password     []byte             `json:"password"`
	AccessToken  string             `json:"accesstoken"`
	RefreshToken string             `json:"refreshtoken"`
}

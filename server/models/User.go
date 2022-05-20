package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID            primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Name          string             `json:"name" bson:"name,omitempty"`
	Email         string             `json:"email" bson:"email"`
	Phone         int                `json:"phone" bson:"phone"`
	Password      string             `json:"-" bson:"password"`
	ExtensionList []string           `json:"extensionList" bson:"extensionList"`
	AccessToken   string             `json:"accessToken,omitempty" bson:"-"`
	RefreshToken  string             `json:"refreshToken,omitempty" bson:"-"`
}

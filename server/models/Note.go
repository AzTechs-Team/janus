package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Note struct {
	ID          primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserId      primitive.ObjectID `json:"userId" bson:"userId"`
	Title       string             `json:"title" bson:"title"`
	Description string             `json:"description" bson:"description"`
	CreatedAt   int64              `json:"createdAt" bson:"createdAt"`
}

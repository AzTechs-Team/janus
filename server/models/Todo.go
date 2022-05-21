package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Todo struct {
	Value  string `json:"value" bson:"value"`
	IsDone bool   `json:"isDone" bson:"isDone"`
}

type TodoGroup struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	UserId    primitive.ObjectID `json:"userId" bson:"userId"`
	Title     string             `json:"title" bson:"title"`
	Todos     []Todo             `json:"todos" bson:"todos"`
	CreatedAt int64              `json:"createdAt" bson:"createdAt"`
}

package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Todo struct {
	Value     string `json:"value" bson:"value"`
	IsDone    bool   `json:"isDone" bson:"isDone"`
	CreatedAt int64  `json:"createdAt" bson:"createdAt"`
}

type TodoGroup struct {
	UserId    primitive.ObjectID `json:"userId" bson:"userId"`
	Title     string             `json:"title" bson:"title"`
	Todos     []Todo             `json:"todo" bson:"todo"`
	CreatedAt int64              `json:"createdAt" bson:"createdAt"`
}

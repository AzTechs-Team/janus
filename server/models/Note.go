package models

type Note struct {
	UserId      string `json:"userId" bson:"userId"`
	Title       string `json:"title" bson:"title"`
	Description string `json:"description" bson:"description"`
	CreatedAt   string `json:"createdAt" bson:"createdAt"`
}

package models

type Todo struct {
	Value     string `json:"value" bson:"value"`
	CreatedAt string `json:"createdAt" bson:"createdAt"`
	IsDone    bool   `json:"isDone" bson:"isDone"`
}

type TodoGroup struct {
	UserId    string `json:"userId" bson:"userId"`
	Title     string `json:"title" bson:"title"`
	Todo      Todo   `json:"todo" bson:"todo"`
	CreatedAt string `json:"createdAt" bson:"createdAt"`
}

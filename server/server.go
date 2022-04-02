package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type User struct {
	Id    primitive.ObjectID `bson:"id"`
	Name  string             `json:"name"`
	Email string             `json:"email"`
	Phone string             `json:"phone"`
	Token string             `json:"token"`
}

var collection *mongo.Collection
var ctx = context.TODO()

func init() {
	clientOptions := options.Client().ApplyURI("mongodb+srv://admin:admin@janus-world.ps8kl.mongodb.net/testDatabase?retryWrites=true&w=majority")
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	collection = client.Database("testDatabases").Collection("test")
	if err != nil {
		log.Fatal(err)
	}
}

func main() {

	http.HandleFunc("/", handler)
	http.HandleFunc("/new", newHandler)
	http.HandleFunc("/json", jsonHandler)

	fmt.Print("Starting server at port 8082\n")
	if err := http.ListenAndServe(":8082", nil); err != nil {
		log.Fatal(err)
	}

}

func createUser(user *User) error {
	_, err := collection.InsertOne(ctx, user)
	return err
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World!")
}

func newHandler(w http.ResponseWriter, r *http.Request) {
	user := &User{
		Id:    primitive.NewObjectID(),
		Name:  "John Doe",
		Email: "johndoe@gmail.com",
		Phone: "000099999",
		Token: "hellloooooooooooo"}
	createUser(user)
	fmt.Fprintf(w, "New User Created")
}

func jsonHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	user := User{Id: primitive.NewObjectID(),
		Name:  "John Doe",
		Email: "johndoe@gmail.com",
		Phone: "000099999",
		Token: "hellloooooooooooo"}
	json.NewEncoder(w).Encode(user)
}

func panic(err error) {
	fmt.Println(err)
}

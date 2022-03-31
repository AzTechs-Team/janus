package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type User struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Phone string `json:"phone"`
	Token string `json:"token"`
}

func main() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/json", jsonHandler)

	fmt.Print("Starting server at port 8082\n")
	if err := http.ListenAndServe(":8082", nil); err != nil {
		log.Fatal(err)
	}

}
func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World!")
}

func jsonHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	user := User{Id: 1,
		Name:  "John Doe",
		Email: "johndoe@gmail.com",
		Phone: "000099999",
		Token: "hellloooooooooooo"}
	json.NewEncoder(w).Encode(user)
}

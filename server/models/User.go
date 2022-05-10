package models

type User struct {
	Name         string `json:"name"`
	Email        string `json:"email"`
	Phone        string `json:"phone"`
	Password     []byte `json:"password"`
	AccessToken  string `bson: "accesstoken,omitempty"`
	RefreshToken string `bson: "refreshToken,omitempty"`
}

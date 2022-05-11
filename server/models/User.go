package models

type User struct {
	Name         string `bson:"name,omitempty"`
	Email        string `bson:"email"`
	Phone        int    `bson:"phone"`
	Password     string `bson:"password"`
	AccessToken  string `bson:"accesstoken,omitempty"`
	RefreshToken string `bson:"refreshToken,omitempty"`
}

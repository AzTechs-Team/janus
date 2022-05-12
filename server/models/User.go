package models

type User struct {
	Name         string `json:"name" bson:"name,omitempty"`
	Email        string `json:"email" bson:"email"`
	Phone        int    `json:"phone" bson:"phone"`
	Password     string `json:"-" bson:"password"`
	AccessToken  string `json:"accessToken,omitempty" bson:"-"`
	RefreshToken string `json:"refreshToken,omitempty" bson:"-"`
}

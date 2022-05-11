package models

type User struct {
	Name         string `bson:"name,omitempty"`
	Email        string `bson:"email"`
	Phone        string `bson:"phone"`
	Password     []byte `bson:"password"`
	AccessToken  string `bson:"accesstoken,omitempty"`
	RefreshToken string `bson:"refreshToken,omitempty"`
}

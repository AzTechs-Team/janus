package cog

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"time"
)

func Ggs() {
	// Add your Computer Vision subscription key and endpoint to your environment variables.
	subscriptionKey := "f49ad0084f014b96819aa2af05f22cff"
	endpoint := "https://janus-vision.cognitiveservices.azure.com/"

	uriBase := endpoint + "vision/v3.2/read/analyze"
	const imageUrl = "https://cdn.discordapp.com/attachments/750019721193324544/974213952475131925/unknown.png"

	// const params = "?visualFeatures=Description&details=Landmarks"
	uri := uriBase
	const imageUrlEnc = "{\"url\":\"" + imageUrl + "\"}"

	reader := strings.NewReader(imageUrlEnc)

	// Create the HTTP client
	client := &http.Client{
		Timeout: time.Second * 2,
	}

	// Create the POST request, passing the image URL in the request body
	req, err := http.NewRequest("POST", uri, reader)
	if err != nil {
		panic(err)
	}

	// Add request headers
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Ocp-Apim-Subscription-Key", subscriptionKey)

	// Send the request and retrieve the response
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()

	// Read the response body
	// Note, data is a byte array
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	// Parse the JSON data from the byte array
	var f interface{}
	json.Unmarshal(data, &f)

	// Format and display the JSON result
	// jsonFormatted, _ := json.MarshalIndent(f, "", "  ")
	Ggs2(resp.Header.Get("Operation-Location"))
}

func Ggs2(operation_location string) {
	// Add your Computer Vision subscription key and endpoint to your environment variables.
	subscriptionKey := "f49ad0084f014b96819aa2af05f22cff"
	uri := operation_location
	// Create the HTTP client
	client := &http.Client{
		Timeout: time.Second * 2,
	}

	// Create the POST request, passing the image URL in the request body
	req, err := http.NewRequest("GET", uri, nil)
	if err != nil {
		panic(err)
	}

	// Add request headers
	req.Header.Add("Ocp-Apim-Subscription-Key", subscriptionKey)

	// Send the request and retrieve the response
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()

	// Read the response body
	// Note, data is a byte array
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	// Parse the JSON data from the byte array
	var f interface{}
	json.Unmarshal(data, &f)

	// Format and display the JSON result
	// jsonFormatted, _ := json.MarshalIndent(f, "", "  ")
	fmt.Print(resp)
}

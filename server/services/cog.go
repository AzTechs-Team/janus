package cog

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/joho/godotenv"
)

func goDotEnvVariable(key string) string {

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}

func Ggs(url string) []string {
	// Add your Computer Vision subscription key and endpoint to your environment variables.
	subscriptionKey := goDotEnvVariable("COG_KEY")
	endpoint := "https://janus-vision.cognitiveservices.azure.com/"

	uriBase := endpoint + "vision/v3.2/read/analyze"
	imageUrl := url

	time.Sleep(time.Second * 5)
	uri := uriBase
	imageUrlEnc := "{\"url\":\"" + imageUrl + "\"}"

	reader := strings.NewReader(imageUrlEnc)

	// time.Sleep(2 * time.Second)
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
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	// Parse the JSON data from the byte array
	var f interface{}
	json.Unmarshal(data, &f)

	uri2 := resp.Header.Get("Operation-Location")
	fmt.Println(uri2)
	time.Sleep(2 * time.Second)

	client2 := &http.Client{}
	req2, err := http.NewRequest("GET", uri2, nil)
	if err != nil {
		panic(err)
	}
	req2.Header.Add("Ocp-Apim-Subscription-Key", subscriptionKey)

	// // Send the request and retrieve the response
	resp2, err := client2.Do(req2)
	if err != nil {
		panic(err)
	}

	defer resp2.Body.Close()

	data2, err := ioutil.ReadAll(resp2.Body)
	if err != nil {
		panic(err)
	}
	var f1 map[string]interface{}
	json.Unmarshal(data2, &f1)

	// // Format and display the JSON result
	jsonFormatted, _ := json.MarshalIndent(f1, "", "  ")

	err = json.Unmarshal(jsonFormatted, &f1)
	if err != nil {
		panic(err)
	}
	// fmt.Print(f1["analyzeResult"].(map[string]interface{})["readResults"].([]interface{})[0].(map[string]interface{})["lines"].([]interface{})[0].(map[string]interface{})["text"])
	var s []string
	results := f1["analyzeResult"].(map[string]interface{})["readResults"].([]interface{})[0].(map[string]interface{})["lines"]
	for _, item := range results.([]interface{}) {
		t := item.(map[string]interface{})["text"].(string)
		s = append(s, t)
	}
	fmt.Printf("%v", s)

	return s
}

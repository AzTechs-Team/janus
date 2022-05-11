const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;
require ('dotenv').config();

const key = process.env.key;
const endpoint = process.env.endpoint;
const computerVisionClient = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

const computerVision=async()=> {
  const printedTextSampleURL = 'https://cdn.discordapp.com/attachments/750019721193324544/972570344877613056/unknown.png';
  console.log('Read printed text from URL...', printedTextSampleURL.split('/').pop());
  const printedResult = await readTextFromURL(computerVisionClient, printedTextSampleURL);
  printRecText(printedResult);
}

const readTextFromURL=async(client, url)=> {
  let result = await client.read(url);
  let operation = result.operationLocation.split('/').slice(-1)[0];
    while (result.status !== "succeeded") { result = await client.getReadResult(operation); }
  return result.analyzeResult.readResults; 
}

const printRecText=async(readResults)=> {
  console.log('Recognized text:');
  for (const page in readResults) {
    if (readResults.length > 1) {
      console.log(`==== Page: ${page}`);
    }
    const result = readResults[page];
    if (result.lines.length) {
      for (const line of result.lines) {
        console.log(line.words.map(w => w.text).join(' '));
      }
    }
    else { console.log('No recognized text.'); }
  }
}

computerVision();
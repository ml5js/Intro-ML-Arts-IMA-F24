// Introduction to Machine Learning for the Arts, Fall 2024
// https://github.com/ml5js/Intro-ML-Arts-IMA-F24
// In class demonstration

// Full ChatBot code here:
// https://github.com/Programming-from-A-to-Z/Ollama-Examples/tree/main/p5-chatbot

async function setup() {
  createCanvas(400, 400);
  console.log('Hello');
  // Ollama server endpoint
  let url = 'http://localhost:11434/api/chat';

  // Initial conversation setup, with a system message and a user message
  let conversationHistory = [
    { role: 'system', content: 'You are a robot.' },
    { role: 'user', content: 'Hi, my name is Fred!' },
  ];
  console.log(conversationHistory);

  // Options for the fetch to specify POST and data
  let options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gemma2:2b',
      messages: conversationHistory,
      stream: false,
    }),
  };

  // Send a POST request await the response
  let response = await fetch(url, options);

  // Parse the JSON response
  let json = await response.json();
  // Full response
  console.log(json);
  // Just the text reply
  console.log(json.message.content);

  background(255);
  fill(0);
  text(json.message.content, 0, 0, width, height);
}

/*
// CALLBACK PATTERN EXAMPLE
// This is now ml5.js works
faceMesh.detect(img, gotData);

function gotData(results) {
  console.log(results); 
}

// AWAIT PATTERN EXAMPLE
// ml5.js does not work with way
let results = await faceMesh.detect(img);
*/

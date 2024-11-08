// Introduction to Machine Learning for the Arts, Fall 2024
// https://github.com/ml5js/Intro-ML-Arts-IMA-F24
// In class demonstration

let promptInput;
let submitButton;
let img;
let loading = false;

function setup() {
  createCanvas(400, 400);
  // Input field for prompt
  promptInput = createInput('A land of rainbows.');
  // Button to submit prompt
  submitButton = createButton('generate');
  submitButton.mousePressed(generateImage);
}

function draw() {
  background(220);
  // Display loading text if image is being generated
  if (loading) {
    textAlign(CENTER, CENTER);
    text('Loading...', width / 2, height / 2);
  }
  // Display generated image if available
  else if (img) {
    image(img, 0, 0, width, height);
  }
}

async function generateImage() {
  loading = true;
  // Send POST request with user prompt to SD-webui running on ITP GPU machine
  // https://github.com/AUTOMATIC1111/stable-diffusion-webui
  const response = await fetch('http://itp-ml.itp.tsoa.nyu.edu:7860/sdapi/v1/txt2img', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: promptInput.value(),
    }),
  });

  // Parse the response
  const data = await response.json();
  img = createImg('data:image/png;base64,' + data.images[0], promptInput.value());
  img.hide();
  loading = false;
}

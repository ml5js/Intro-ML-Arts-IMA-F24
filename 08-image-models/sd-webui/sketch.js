let promptInput;
let submitButton;
let img;
let loading = false;

function setup() {
  createCanvas(400, 400);
  promptInput = createInput('A land of rainbows.');
  submitButton = createButton('generate');
  submitButton.mousePressed(generateImage);
}

function draw() {
  background(220);
  if (loading) {
    textAlign(CENTER, CENTER);
    text('Loading...', width / 2, height / 2);
  } else if (img) {
    image(img, 0, 0, width, height);
  }
}

async function generateImage() {
  loading = true;
  const response = await fetch('http://itp-ml.itp.tsoa.nyu.edu:7860/sdapi/v1/txt2img', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: promptInput.value(),
    }),
  });

  const data = await response.json();
  img = createImg('data:image/png;base64,' + data.images[0], promptInput.value());
  img.hide();
  loading = false;
}

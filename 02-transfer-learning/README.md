# Transfer Learning

- [Transfer Learning Slides](https://docs.google.com/presentation/d/1rqPmBqJaiRI_np2szc-F74778HXyZyNeVYHQsdVdeis/edit?usp=sharing)
- [ml5.js + Teachable Machine Video Example](https://editor.p5js.org/ima_ml/sketches/vOSSEZwGf)

## Objectives

- Diagram and define the layers of a neural network, introducing the concept of a “convolutional layer”.
- Distinguish between a “feature vector” (aka logits) and the last layer (aka softmax probabilities) of a classification network.
- Understand the process of “transfer learning”.
- Learn about k-nearest neighbors algorithm (_k_-NN).
- Learn to save a trained model for re-use later.

### Tools

- [Teachable Machine Website](https://teachablemachine.withgoogle.com)
  - [Teachable Machine 2.0: Making AI easier for everyone](https://youtu.be/T2qQGqZxkD0) from Google.
  - [Image + Teachable Machine Reference](https://docs.ml5js.org/#/reference/image-classifier-tm) from ml5.js Documentation.
  - [Teachable Machine Community Repo](https://github.com/googlecreativelab/teachablemachine-community)
  - [ml5.soundClassifer Reference](https://docs.ml5js.org/#/reference/sound-classifier)
  - [TensorFlow.js Speech Command Recognizer Source Code](https://github.com/tensorflow/tfjs-models/tree/master/speech-commands)

### Code Examples

- [Image Classification with Teachable Machine and ml5.js](https://editor.p5js.org/ml5/sketches/VvGXajA36)
- [Sound Classification with Teachable Machine and ml5.js](https://editor.p5js.org/ml5/sketches/mXeiNXSTU)
- [Sound Classification - Speech Commands](https://editor.p5js.org/ml5/sketches/HUm7NYMW3)

### Related Projects

#### Accessibility

- [Getting Alexa to Respond to Sign Language Using Your Webcam and TensorFlow.js](https://medium.com/tensorflow/getting-alexa-to-respond-to-sign-language-using-your-webcam-and-tensorflow-js-735ccc1e6d3f) by Abhishek Singh. [ [Live Demo](https://shekit.github.io/alexa-sign-language-translator/) ]
- [Project Euphonia](https://www.youtube.com/watch?v=OAdegPmkK-o) from Google.
- [Objectifier Spatial Programming](https://experiments.withgoogle.com/ai/objectifier-spatial-programming) by Bjørn Karmann.

#### Games

- [Webcam Pacman](https://storage.googleapis.com/tfjs-examples/webcam-transfer-learning/dist/index.html) by Google’s TensorFlow.js Team.
- [Pong ML](https://github.com/matamalaortiz/Pong-ML) by Alejandro Matamala Ortiz.
- [Teachable Snake](https://experiments.withgoogle.com/teachable-snake) by Vince MingPu Shao.
- [Teachable Arcade](https://ryancan.build/projects/teachable-arcade) by Ryan Flomerfelt Mather.

#### Playful

- [Tiny Sorter](https://experiments.withgoogle.com/tiny-sorter) by Google Creative Lab.
- [Eyeo Festival 2019 - Coding Train](https://vimeo.com/354276216) with Daniel Shiffman. [ [GitHub Repo](https://github.com/CodingTrain/Eyeo-Festival-2019) ]

#### Visuals

- [Regression Curve](https://github.com/byjoohyunpark/regression-curve) by Joohyun Park.
- [Asemic Writing Teachable Machine](http://blog.jzhong.today/computationaltypo/Asemic-Writing-Teachable-Machine/) by Jillian Zhong.

## Supplemental Materials

- [Local Development and Hosting Resources Wiki Page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/Local-Development-and-Hosting-Resources) (originally by Jack B. Du.)
- [But what _is_ a Neural Network?](https://youtu.be/aircAruvnKk) by 3Blue1Brown.
- [How to Build a Teachable Machine with TensorFlow.js](https://observablehq.com/@nsthorat/how-to-build-a-teachable-machine-with-tensorflow-js) by Nikhil Thorat.

### Video Tutorials

_Note: ml5.js tutorials below were taught using an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/ml5.js-Resources#ml5js-10-resources) for more information._

#### Teachable Machine

- [Teachable Machine video tutorials](https://www.youtube.com/playlist?list=PLJfHZtseuscuTQfodmFnbZ3rBgCWsRT9t) from Experiments with Google.
- [Teachable Machine video tutorials](https://thecodingtrain.com/tracks/teachable-machine) by Daniel Shiffman.

#### Transfer Learning with ml5.js (currently not supported by ml5.js 1.0)

- [ml5.js: Transfer Learning with Feature Extractor - video tutorial](https://youtu.be/kRpZ5OqUY6Y?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
- [ml5.js: Feature Extractor Classification - video tutorial](https://youtu.be/eeO-rWYFuG0?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
- [ml5.js: Feature Extractor Regression - video tutorial](https://youtu.be/aKgq0m1YjvQ?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
- [ml5.js: Save/Load Model - video tutorial](https://youtu.be/eU7gIy3xV30?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.

## Assignment 2

1. Review [Excavating AI: The Politics of Images in Machine Learning Training Sets](https://www.excavating.ai) by Kate Crawford and Trevor Paglen. Consider the following excerpt from the conclusion:

![Ceci n’est pas une pipe.](https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg)

> The artist René Magritte completed a painting of a pipe and coupled it with the words “Ceci n’est pas une pipe.” Magritte called the painting La trahison des images, “The Treachery of Images.”

> Magritte’s assumption was almost diametrically opposed: that images in and of themselves have, at best, a very unstable relationship to the things seem to represent, one that can be sculpted by whoever has the power to say what a particular image means. For Magritte, the meaning of images is relational, open to contestation. At first blush, Magritte’s painting might seem like a simple semiotic stunt, but the underlying dynamic Magritte underlines in the painting points to a much broader politics of representation and self-representation.

Reflect on the relationship between labels and images in a machine learning image classification dataset. Who has the power to label images and how do those labels and machine learning models trained on them impact society?

2. Train your own image classifier using Teachable Machine and apply the model to an interactive p5.js sketch. Feel free to try sound instead of or in addition to images.

3. Document your reading reflections and your coding exercise in a blog post and add a link to the post and your p5 sketch on the [Assignment 2 Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/Assignment-2). In your blog post, include visual documentation such as a recorded screen capture / video / GIFs of training the model and working in p5. You may include both in one post or write two separate posts if you prefer.

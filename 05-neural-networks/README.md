# Training a Neural Network

[Slides](https://docs.google.com/presentation/d/1Jj3fOZFh_aZ2H4IOUcZts1OanU3bBMaN3zZDLEyRnno/edit?usp=sharing)

## Objectives

- Learn steps to construct a "vanilla" neural network and train a classification model with ml5.js.
- Understand Neural Network architecture.
  - What is a perceptron?
  - What is a multi-layered perceptron?
  - What are activation functions?
- Understand the terminology of the training process.
  - Training
  - Learning rate
  - [Epochs](https://docs.ml5js.org/#/learn/ml5-glossary?id=epochs)
  - [Batch size](https://docs.ml5js.org/#/learn/ml5-glossary?id=batch-size)
  - Loss
- Understand the difference between training and inference.
- Understand the distinction between different types of layers in a neural network.
  - What is a convolutional layer?
  - What is a pooling layer?
- Learn to train an image classifier with ml5.js, with and without convolutional layers.
- Revisit and examine the concepts of classification and regression as applied to real-time interaction.

## Tools

- [ml5.neuralNetwork Reference](https://docs.ml5js.org/#/reference/neural-network)
  - [ml5.neuralNetwork Source Code](https://github.com/ml5js/ml5-next-gen/tree/main/src/NeuralNetwork)
  - [TensorFlow.js Source Code](https://github.com/tensorflow/tfjs)

## Artificial Neural Networks

### Code Examples

- [NeuralNetwork - Color Classifier](https://editor.p5js.org/ml5/sketches/eGHBdmCLe)
- [NeuralNetwork - Mouse Gesture](https://editor.p5js.org/ml5/sketches/FdXAgrA3N)
- [NeuralNetwork - Train and Save](https://editor.p5js.org/ml5/sketches/rR51vvi-u)
- [NeuralNetwork - Load Model](https://editor.p5js.org/ml5/sketches/U-aljtx7x)

### Supplemental Materials

- [Chapter 10: Neural Network, Nature of Code](https://natureofcode.com/book/chapter-10-neural-networks/) by Daniel Shiffman.
- [But what _is_ a Neural Network?](https://youtu.be/aircAruvnKk?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) by 3Blue1Brown.
- [The 7 steps of machine learning](https://www.youtube.com/watch?v=nKW8Ndu7Mjw) from Google Cloud Tech.

### Video Tutorials

🚨 _Note: ml5.js tutorials below were taught using an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/ml5.js-Resources) for more information._ 🚨

#### Neural Network Concepts

- [Neural Networks: Perceptron (2 parts) - video tutorial](https://thecodingtrain.com/tracks/neural-networks/neural-networks/2-perceptron-part-1)
- [Neural Networks: Multilayer Perceptron (2 parts) - video tutorial](https://thecodingtrain.com/tracks/neural-networks/neural-networks/4-multilayer-perceptron-part-1).
- [Neural Networks: Matrix Math](https://thecodingtrain.com/tracks/neural-networks/neural-networks/6-matrix-math-basics) by Daniel Shiffman.

#### ml5.js Neural Network

- [ml5.js: Train Your Own Neural Network - video tutorial](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/6-train-your-own-neural-network/1-train-the-model)
- [ml5.js: Save Neural Network Training Data - video tutorial](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/6-train-your-own-neural-network/2-save-data)
- [ml5.js: Save Neural Network Model - video tutorial](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/6-train-your-own-neural-network/3-save-model)
- [ml5: Neural Network Regression - video tutorial](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/6-train-your-own-neural-network/4-regression)
- [ml5.js: Pose Classification with PoseNet and ml5.neuralNetwork() - video tutorial](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/7-posenet/2-pose-classifier)
- [ml5.js: Pose Regression with PoseNet and ml5.neuralNetwork() - video tutorial](https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/7-posenet/3-pose-regression)

## Convolutional Neural Networks

### Video Tutorials

- [ml5.js: What is Convolutional Neural Network Part 1 - Filters - video tutorial](https://youtu.be/qPKsVAI_W6M) by Daniel Shiffman.
- [ml5.js: What is Convolutional Neural Network Part 2 - Max Pooling - video tutorial](https://youtu.be/pRWq_mtuppU) by Daniel Shiffman.- [ml5.js: Training a Neural Network with Pixels as Input - video tutorial](https://www.youtube.com/watch?v=UaKab6h9Z0I)
- [ml5.js: Training a Convolutional Neural Network for Image Classification - video tutorial](https://www.youtube.com/watch?v=hWurN0XhzLY)

### Datasets

- [The Quick, Draw! Dataset](https://github.com/googlecreativelab/quickdraw-dataset) from Google Creative Lab.
- [The MNIST Dataset](https://yann.lecun.com/exdb/mnist/) by Yann LeCun el al.

### Supplemental Materials

- [An Intuitive Explanation of Convolutional Neural Networks](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/) by Ujjwal Karn.
- [What Neural Networks See](https://experiments.withgoogle.com/what-neural-nets-see) by Gene Kogan.
- ["Gradient-Based Learning Applied to Document Recognition"](http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf) by Y. LeCun, L. Bottou, Y. Bengio, P. Haffner.
- [How computers got shockingly good at recognizing images](https://arstechnica.com/science/2018/12/how-computers-got-shockingly-good-at-recognizing-images/) by Timothy B. Lee.
- [A visual and intuitive understanding of deep learning, CNNs](https://www.youtube.com/watch?v=Oqm9vsf_hvU) (0:00–9:40) by Octavio Good.
- [Recognizing Human Facial Expressions With Machine Learning](https://thoughtworksarts.io/blog/recognizing-facial-expressions-machine-learning/) by Angelica Perez.
- [Image Kernels Explained Visually](http://setosa.io/ev/image-kernels/) by Victor Powell.
- [Interactive Node-Link Visualizations of Convolutional Neural Networks](https://adamharley.com/nn_vis/) by Adam W. Harley.
- [Convolution Operation Demo](https://deeplizard.com/resource/pavq7noze2) by Deeplizard.

### Related Projects

- [Letter Collages](http://frauzufall.de/en/2017/google-quick-draw/) by Deborah Schmidt.
- [Face Tracking Experiment](https://www.instagram.com/p/BUU8TuQD6_v/) by Neil Mendoza.
- [Faces of Humanity](http://project.laboiteatortue.com/facesofhumanity/) by La Boite à Tortue.
- [Scribbling Speech](http://xinyue.de/scribbling-speech.html) by Xinyue Yang.
- [How do you draw a circle?](https://qz.com/994486/the-way-you-draw-circles-says-a-lot-about-you/) by Thu-Huong Ha and Nikhil Sonnad.
- [Machine Learning for Visualization](https://medium.com/@enjalot/machine-learning-for-visualization-927a9dff1cab) by Ian Johnson.

### Code Examples

#### Working with Datasets

- [Loading and Displaying Quick, Draw! Dataset](https://editor.p5js.org/jackbdu/sketches/UC_KqRr121)
- [Loading and Displaying MNIST Dataset](https://editor.p5js.org/jackbdu/sketches/E1Bb3KmLl)

#### Convolution Neural Network Layers

- [Convolutional Neural Network - Filter Demo](https://editor.p5js.org/codingtrain/sketches/BN1lE-gyl)
- [Convolutional Neural Network - Max Pooling Demo](https://editor.p5js.org/codingtrain/sketches/GMRfsK7Wn)

#### Training Image Classifiers

- [Training a Doodle Classifier with Convolutional Layers](https://editor.p5js.org/jackbdu/sketches/Id2cg4UQL)
- [Training a Handwritten Digit Classifier with Convolutional Layers](https://editor.p5js.org/jackbdu/sketches/ab7lfmRyH)
- [Training a Webcam Image Classifier with Convolutional Layers](https://editor.p5js.org/jackbdu/sketches/7Y6VDvUO6)
- [Doodle Classification with DoodleNet](https://editor.p5js.org/jackbdu/sketches/ts3fuRZGW) (model trained by [@yining1023](https://github.com/yining1023))

## ml5.js project

### Due Thursday, Oct 10

1. Watch [Machine Learning for Human Creative Practice](https://vimeo.com/287094397) by Dr. Rebecca Fiebrink at Eyeo 2018. Reflect on the question: How can machine learning support and expand people’s creative practices?

Write a response to this question and outline an initial idea for your project. Do you plan to build on a previous assignment or start something new? Post a link to your response on the [ml5.js Project Step 1 Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/ml5.js-Project-1).

### Due Thursday, Oct 17

2. Develop a p5.js sketch with ml5.js, using one or more of the models we’ve covered in the first half of the semester. Here are some ideas to get you started:

   - Create a simple movement-controlled game using hand, body, or face keypoints. Think about how different gestures might influence gameplay or character actions.
   - Design a musical instrument that responds to hand, body, or face keypoints, allowing gestures to control sound parameters such as pitch, volume, or effects. Explore creating melodies or soundscapes.
   - Build an augmented mirror or photo booth by overlaying p5.js elements on real-time video. Use segmentation or keypoint data to add visuals that respond to movements.
   - Make an interactive painting tool controlled by hand, body, or face keypoints. Experiment with effects like trailing particles or dynamic brushes that change shape and color based on gestures.
   - Chain models by using the output of one model as input to another with `ml5.neuralNetwork()`. For example, capture body or hand poses to create a custom classifier that drives an interaction. How could regression be applied to modify continuous elements like color gradients or speed?
   - Use transfer learning with Teachable Machine to train a custom image classifier on objects from your surroundings. Experiment with using these classifications to trigger interactions, visuals, or sounds in your sketch.

3. Document your project in a blog post and come prepared to share your work for ~5 minutes. You are not required to have a slide deck, however, you might find slides useful to help you plan and structure your demo. Add a link to your documentation to the [ml5.js Project Step 2 Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/ml5.js-Project-2).

Consider including:

- Title
- Sketch link
- One sentence description
- Summary (250-500 words)
- Visual documentation such as a recorded screen capture / video / GIFs.
- Inspiration: How did you become interested in this idea? Quotes, photographs, products, projects, people, music, political events, social ills, etc.
- Process: How did you make this? What did you struggle with? What were you able to implement easily and what was difficult?
- Code references: What examples, tutorials, references did you use to create the project? (You must cite the source of any code you use in code comments. Please note the following additional expectations and guidelines at the bottom of this page.)
- Next steps: If you had more time to work on this, what would you do next?

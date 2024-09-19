# Body Models

- [Body Models Slides](https://docs.google.com/presentation/d/1YPJJzmK20Dbf4A-AFinYdgs-0E8GmRZiZWYdUlZYe30/edit?usp=sharing)

## Objectives

- Learn about TensorFlow Pose Estimation model and how it works.
- Learn about TensorFlow Body Segmentation model and how it works.
- Learn the differences between MoveNet and BlazePose and how to choose between them.
- Learn the differences between BodyPix and SelfieSegmentation and how to choose between them.
- Learn to work with ml5.bodyPose and ml5.bodySegmentation.

## Lecture Notes

### Tools

- [ml5.bodyPose Reference](https://docs.ml5js.org/#/reference/bodypose)
  - [ml5.bodyPose Source Code](https://github.com/ml5js/ml5-next-gen/tree/main/src/BodyPose)
  - [TensorFlow.js Pose Detection Source Code](https://github.com/tensorflow/tfjs-models/tree/master/pose-detection)
  - [MoveNet.SinglePose Model Card](https://storage.googleapis.com/movenet/MoveNet.SinglePose%20Model%20Card.pdf)
  - [MediaPipe BlazePose CHUM 3D Model Card](https://drive.google.com/file/d/10WlcTvrQnR_R2TdTmKw0nkyRLqrwNkWU/)
- [ml5.bodySegmentation Reference](https://docs.ml5js.org/#/reference/body-segmentation)
  - [ml5.bodySegmentation Source Code](https://github.com/ml5js/ml5-next-gen/tree/main/src/BodySegmentation)
  - [TensorFlow.js Body Segmentation Source Code](https://github.com/tensorflow/tfjs-models/tree/master/body-segmentation)

### Related Projects

- [PomPom Mirror](https://vimeo.com/128375543) by Daniel Rozin.
- [The Treachery of Sanctuary](https://www.youtube.com/watch?v=I5__9hq-yas&feature=youtu.be) by Chris Milk.
- [Moving morrir](https://experiments.withgoogle.com/move-mirror) from Google Creative Lab.
- [Touch Type](https://experiments.withgoogle.com/touch-type) by Richard Yee.
- [PoseNet Sketchbook](https://googlecreativelab.github.io/posenet-sketchbook/) by Maya Man.
- [AR Body Filters](https://sheeborshee.com/AR-body-filters-2019) by Daria Sazanovich.
- [Dance with Bubbles](https://sihanzhang.wixsite.com/myspace/machine-learning-for-the-web) by Sihan Zhang.
- [nixel-Body](http://cmuems.com/2018/60212f/nixel/10/12/nixel-body/) from CMU Interactivity & Computation.
- [Web Olympic](https://vibertthio.com/web-olympic/) by Vibert Thio.

#### Choreography

- [Body, Movement, Language: A.I. Sketches with Bill T. Jones](https://experiments.withgoogle.com/billtjonesai) from Google Creative Lab.
- [ballet rotoscope](https://www.youtube.com/watch?v=yzJk6ww3LD0) by Euphrates.
- [Messa di Voce](https://vimeo.com/2892576) by Golan Levin, Zach Lieberman, Jaap Blonk, and Joan La Barbara.

#### Music

- [Body Synth](https://experiments.withgoogle.com/body-synth) by Use All Five & Google Creative Lab.
- [Semi-Conductor](https://experiments.withgoogle.com/semi-conductor) from Google Creative Lab.
- [This Is Not A Theremin](https://sofiaitp.wordpress.com/2018/12/04/this-is-not-a-theremin/) by Guillermo Montecinos and Sofía Suazo.
- [Sidewalk Orchestra](https://github.com/cvalenzuela/sidewalk_orchestra) by Cristóbal Valenzuela.
- [Pose Music](https://codepen.io/teropa/full/QxLrMp/) by Tero Parviainen.

#### Animation

- [Pose Animator](https://github.com/yemount/pose-animator/) by Shan Huang.
- [Puppet Parade - Interactive Kinect Puppets](https://vimeo.com/34824490) by Design I/O.

### Code Examples

#### Core Functionalities

- [BodyPose - MoveNet Keypoints](https://editor.p5js.org/ml5/sketches/c8sl_hGmN)
- [BodyPose - MoveNet Skeleton](https://editor.p5js.org/ml5/sketches/vpSI23x0A)
- [BodyPose - BlazePose Keypoints](https://editor.p5js.org/ml5/sketches/OukJYAJAb)
- [BodyPose - BlazePose Skeleton](https://editor.p5js.org/ml5/sketches/KWgsAbgkk)
- [BodySegmentation - Mask Background with SelfieSegmentation](https://editor.p5js.org/ml5/sketches/KNsdeNhrp)
- [BodySegmentation - Mask Person with SelfieSegmentation](https://editor.p5js.org/ml5/sketches/h6TN8umP5)
- [BodySegmentation - Mask Body Parts with BodyPix](https://editor.p5js.org/ml5/sketches/ruoyal-RC)
- [BodySegmentation - Mask Select Body Parts with BodyPix](https://editor.p5js.org/ml5/sketches/R5rug0HKk)

#### Creative Applications

- [BodyPose - Drawing with Nose](https://editor.p5js.org/jackbdu/sketches/bUsDnrEbv) by Jack Du
- [BodyPose - Trailing Effect](https://editor.p5js.org/jackbdu/sketches/eQTjLNK35) by Jack Du
- [BodyPose - Cat or Dog](https://editor.p5js.org/jackbdu/sketches/26sLU0Ub-) by Jack Du
- [Additional examples](https://github.com/yining1023/machine-learning-for-the-web/tree/main/week3-pose) from Yining Shi (_Note: these demos were created with an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/ml5.js-Resources#ml5js-10-resources) for more information._)

### Technical Blog Posts

- [Real-Time Human Pose Estimation in the Browser with TensorFlow.js](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5) by Dan Oved, with editing and illustrations by Irene Alvarado and Alexis Gallo. [ [Original Paper](https://arxiv.org/pdf/1803.08225) ]
- [Next-Generation Pose Detection with MoveNet and TensorFlow.js](https://blog.tensorflow.org/2021/05/next-generation-pose-detection-with-movenet-and-tensorflowjs.html) by Ronny Votel and Na Li.
- [3D Pose Detection with MediaPipe BlazePose GHUM and TensorFlow.js](https://blog.tensorflow.org/2021/08/3d-pose-detection-with-mediapipe-blazepose-ghum-tfjs.html) by Ivan Grishchenko, Valentin Bazarevsky, Eduard Gabriel Bazavan, Na Li, Jason Mayes.
- [Introducing BodyPix: Real-time Person Segmentation in the Browser with TensorFlow.js](https://medium.com/tensorflow/introducing-bodypix-real-time-person-segmentation-in-the-browser-with-tensorflow-js-f1948126c2a0) by Dan Oved and Tyler Zhu, with editing by Irene Alvarado.
- [Body Segmentation with MediaPipe and TensorFlow.js](https://blog.tensorflow.org/2022/01/body-segmentation.html) by Ivan Grishchenko, Valentin Bazarevsky, Ahmed Sabie, and Jason Mayes.
- [Pose Animator - An open source tool to bring SVG characters to life in the browser via motion capture](https://blog.tensorflow.org/2020/05/pose-animator-open-source-tool-to-bring-svg-characters-to-life.html) by Shan Huang.

### Video Tutorials

_Note: ml5.js tutorials below were taught using an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/ml5.js-Resources#ml5js-10-resources) for more information._

- [ml5.js Pose Estimation with PoseNet - video tutorial](https://youtu.be/OIo-DIOkNVg?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman
- [ml5.js: Pose Classification with PoseNet and ml5.neuralNetwork() - video tutorial](https://www.youtube.com/watch?v=FYgYyq-xqAw&t=1197s) by Daniel Shiffman
- [ml5.js: Pose Regression with PoseNet and ml5.neuralNetwork() - video tutorial](https://www.youtube.com/watch?v=lob74HqHYJ0) by Daniel Shiffman

## Assignment 3

1. Read [Mixing movement and machine](https://medium.com/artists-and-machine-intelligence/mixing-movement-and-machine-848095ea5596) by Maya Man.
2. Read [Humans of AI](https://humans-of.ai/editorial) by Philipp Schmitt.
3. Pick one of the models above (BodyPose or BodySegmentation), following the examples above and [ml5.js documentation](https://docs.ml5js.org/), experiment with controlling elements of a p5.js sketch (color, geometry, sound, text, etc) with the output of the model.
4. Read [Open Sourcing the Origin Stories: The ml5.js Model and Data Provenance Project](https://github.com/ellennickles/ml5js-model-and-data-provenance-project) by Ellen Nickles and reflect on the the following questions:
   - What questions do you still have about the model and the associated data? Are there elements you would propose including in the biography?
   - How does understanding the provenance of the model and its data inform your creative process?
5. Document your response to the readings as well as your p5.js sketch in a blog post and add a link to the post and your p5.js sketch on the [Assignment 3 Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/Assignment-3). In your blog post, include visual documentation such as a recorded screen capture / video / GIFs of your sketch.

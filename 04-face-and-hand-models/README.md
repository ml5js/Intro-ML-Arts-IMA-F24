# Face and Hand Models

[Slides](https://docs.google.com/presentation/d/1BX3LxdvQgBufuJBTkSXBteR1bW12EFBferfbCVecND4/edit?usp=sharing)

## Objectives

- Learn about TensorFlow Face Landmarks Detection model and how it works.
- Learn about TensorFlow Hand Pose Detection model and how it works.
- Learn to work with ml5.faceMesh and ml5.handPose.
- Learn to work with 3D graphics in p5.js WEBGL mode.

## Lecture Notes

### Tools

- [ml5.faceMesh Reference](https://docs.ml5js.org/#/reference/facemesh)
  - [ml5.faceMesh Source Code](https://github.com/ml5js/ml5-next-gen/tree/main/src/FaceMesh)
  - [TensorFlow.js Face Landmarks Detection Source Code](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection)
  - [MediaPipe FaceMesh Model Card](https://drive.google.com/file/d/1VFC_wIpw4O7xBOiTgUldl79d9LA-LsnA/)
- [ml5.handPose Reference](https://docs.ml5js.org/#/reference/handpose)
  - [ml5.handPose Souce Code](https://github.com/ml5js/ml5-next-gen/tree/main/src/HandPose)
  - [TensorFlow.js Hand Pose Detection Source Code](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection)
  - [Hand Detection/Tracking Model Card](https://drive.google.com/file/d/1sv4sSb9BSNVZhLzxXJ0jBv9DqD-4jnAz/)

### Related Projects

- [Keyboard](https://experiments.withgoogle.com/keyboard) by Use All Five & Google Creative Lab.
- [Fingerspelling](https://www.hellomonday.com/work/fingerspelling) by Hello Monday.
- [Projection Mapping](https://www.instagram.com/p/CrLLNzGLcoA/) by Nahuel Gerth.
- [Customizable AR face masks - Made with TensorFlow.js](https://www.youtube.com/watch?v=TpiGFaHC_5U) by Samarth Gulati and Praveen Sinha.
- [DeepPrivacy2 - A Toolbox for Realistic Image Anonymization](https://github.com/hukkelas/deep_privacy2) by Hukkelås, Håkon and Lindseth, Frank.

#### Music

- [LipSync by YouTube](https://experiments.withgoogle.com/lipsync) by Google PI & bit.studio.
- [Eye Conductor](https://www.andreasrefsgaard.dk/projects/eye-conductor/) by Andreas Refsgaard.
- [Sampler](https://experiments.withgoogle.com/sampler) by Use All Five & Google Creative Lab.
- [Mouth-Controlled Synthesizer with FaceMesh](https://www.instagram.com/p/C41i1VQsfs0/) by Jack B. Du. [ [Live Demo](https://editor.p5js.org/jackbdu/full/lNFGj9ENL) ]
- [Melody Painter with HandPose](https://www.instagram.com/p/C4WozrtsZ4r/) by Jack B. Du. [ [Live Demo](https://editor.p5js.org/jackbdu/full/jIvzImJMb) ]

#### Playful

- [Finger Talk](https://www.media.mit.edu/projects/finger-talk/overview/) by Future Sketches.
- [Look At You](https://by.alan.ooo/Project+Portfolio/Code/Look+At+You!!!) by Alan Ren & Kyrie Yang.
- [Bubbles](https://www.instagram.com/p/C6S5BHPCGu3/) by Nahuel Gerth.
- [Finger Numerals](https://www.instagram.com/p/CsBMOvUL4CP/) by Nahuel Gerth.

### Code Examples

#### In class examples

- [HandPose - pinch painting](https://editor.p5js.org/ima_ml/sketches/v1x7MSdLW)
- [FaceMesh - image texture](https://editor.p5js.org/ima_ml/sketches/wVbQau7li)
- [FaceMesh - pixel colors](https://editor.p5js.org/ima_ml/sketches/hyxD1BVVn)
- [FaceMesh - lip contours](https://editor.p5js.org/ima_ml/sketches/8xB4wpH16)

#### Core Functionalities

- [FaceMesh - Single Image](https://editor.p5js.org/ml5/sketches/lqQZrDJHF)
- [FaceMesh - Face Keypoints](https://editor.p5js.org/ml5/sketches/lCurUW1TT)
- [FaceMesh - Face Bounding Box](https://editor.p5js.org/ml5/sketches/fMCIspRD7_)
- [FaceMesh - Parts Keypoints](https://editor.p5js.org/ml5/sketches/EjynWxazD4)
- [FaceMesh - Parts Bounding Box](https://editor.p5js.org/ml5/sketches/F9jRILxn2)
- [FaceMesh - Shapes from Parts](https://editor.p5js.org/ml5/sketches/6qj0M3ElM)
- [HandPose - Single Image](https://editor.p5js.org/ml5/sketches/8VK_l3XwE)
- [HandPose - Keypoints](https://editor.p5js.org/ml5/sketches/QGH3dwJ1A)
- [HandPose - Keypoints 3D](https://editor.p5js.org/jackbdu/sketches/DZoGg02Sx)
- [HandPose - Parts](https://editor.p5js.org/ml5/sketches/DNbSiIYKB)
- [HandPose - Detect Start and Stop](https://editor.p5js.org/ml5/sketches/W9vFFT5RM)

#### Creative Applications

- [FaceMesh - Emoji Face](https://editor.p5js.org/jackbdu/sketches/yZaBHBH6S) by Jack Du
- [FaceMesh - Triangulation](https://editor.p5js.org/jackbdu/sketches/J_NYWKtT7) by Jack Du
- [FaceMesh - Face Masks](https://editor.p5js.org/jackbdu/sketches/O6BB8iRHv) by Jack Du
- [HandPose - Particles](https://editor.p5js.org/jackbdu/sketches/4Pd5XgWtC) by Jack Du
- [HandPose - Quadrilateral](https://editor.p5js.org/jackbdu/sketches/s3uqE-9fA) by Jack Du
- [HandPose - Quadrilateral with Texture](https://editor.p5js.org/jackbdu/sketches/JwMBQyES3) by Jack Du

### Technical Blog Posts

- [Face and hand tracking in the browser with MediaPipe and TensorFlow.js](https://blog.tensorflow.org/2020/03/face-and-hand-tracking-in-browser-with-mediapipe-and-tensorflowjs.html) by Ann Yuan and Andrey Vakunov. [ [Original Paper](https://arxiv.org/pdf/1907.06724) ]
- [On-Device, Real-Time Hand Tracking with MediaPipe](https://research.google/blog/on-device-real-time-hand-tracking-with-mediapipe/) by Valentin Bazarevsky and Fan Zhang.
- [3D Hand Pose with MediaPipe and TensorFlow.js](https://blog.tensorflow.org/2021/11/3D-handpose.html) by Valentin Bazarevsky, Ivan Grishchenko, Eduard Gabriel Bazavan, Andrei Zanfir, Mihai Zanfir, Jiuqiang Tang, Jason Mayes, Ahmed Sabie.

### Video Tutorials

- [ml5.js FaceMesh Creative Sketch - video tutorial](https://www.youtube.com/watch?v=2h8VArJ3gnQ) with Patt Vira.

## Assignment 4

1. Research and find a project (experiments, websites, art installations, games, etc) that utilizes machine learning in a creative way. Consider the following:
   - What type of machine learning models did the creator use?
   - What data might have been used to train the machine learning model?
   - Why did the creator of the project choose to use this machine learning model?
2. Pick one of the models above (FaceMesh or HandPose), following the examples above and the [ml5.js documentation](https://docs.ml5js.org/), experiment with controlling elements of a p5.js sketch (color, geometry, sound, text, etc) with the output of the model. Try to create an interaction that is surprising or one that is inspired by the project you find.
3. Document your research, your response, and your p5.js sketch in a blog post. Add a link to the post and your p5.js sketch on the [Assignment 4 Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/Assignment-4). In your blog post, include visual documentation such as a recorded screen capture / video / GIFs of your sketch.

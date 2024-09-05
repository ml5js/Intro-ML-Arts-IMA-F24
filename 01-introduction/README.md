# Introduction

- [Introduction Slides](https://docs.google.com/presentation/d/1SmQ__RbL81uQZLVJvSLe8VBZSFhi5Pzm27JhzMnd55w/edit?usp=sharing)
- [Example Sketches](https://editor.p5js.org/ima_ml/collections/TwoOZGAuw)

## Objectives

- Define Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL).
- Learn about the history of machine learning.
- Overview of applications of machine learning, especially for art and design.
- Learn about the tools for machine learning.
- Understand the difference between classification and regression.
- Understand the concept of a “machine learning model”.
- What is a “[pre-trained model](https://docs.ml5js.org/#/learn/ml5-glossary?id=pretrained-model)”?
- What does it mean to discuss the “architecture” of a machine learning model?
- Define and diagram an artificial neural network.
- Understand what [ml5.js](https://ml5js.org/about/) is and how it fits into the TensorFlow and open source machine learning library ecosystem.
- Learn how to create an image classifier with ml5.js and [MobileNet](https://docs.ml5js.org/#/learn/ml5-glossary?id=mobilenet).
- Understand how the MobileNet model was trained, specifically the origins and collection methodology for the training.

### Tools

- [p5.js Website](https://p5js.org)
  - [p5.js Reference](https://p5js.org/reference/)
  - [p5.js Web Editor](https://editor.p5js.org)
- [ml5.js Website](https://ml5js.org)
  - [ml5.js Reference](https://docs.ml5js.org/#/reference/overview)
- [TensorFlow.js Website](https://www.tensorflow.org/js)
- [ml5.imageClassifier Reference](https://docs.ml5js.org/#/reference/image-classifier)
  - [ml5.imageClassifier Source Code](https://github.com/ml5js/ml5-next-gen/tree/main/src/ImageClassifier)
  - [TensorFlow.js MobileNet Source Code](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)
- [TensorFlow.js models](https://www.tensorflow.org/js/models)
  - [TensorFlow.js demos](https://www.tensorflow.org/js/demos)

### Code Examples

- [Image Classification - Single Image](https://editor.p5js.org/ima_ml/sketches/kt1tm9u8wL)
- [Image Classification - Drag and Drop Image](https://editor.p5js.org/ima_ml/sketches/xlQCdIZGl)
- [Image Classification - Video](https://editor.p5js.org/ima_ml/sketches/attFrN2bk)
- [Image Classification - Video with Speech Output](https://editor.p5js.org/ima_ml/sketches/sjIgLgtig)

### p5.js review

- [Learning While Making p5.js](https://youtu.be/1k3X4DLDHdc) with Lauren McCarthy.
- [p5.js Web Editor Overview](https://youtu.be/x1rJJRVTpAI) with Cassie Tarakajian.
- [Code! Programming with p5.js](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) by Daniel Shiffman.
- [Creative Coding for Absolute Beginners](https://www.youtube.com/playlist?list=PLUbmjnHkwarjjudjj2dclvClnL5ngpDze) by Jack B. Du.

### ml5.js Video Tutorials (updated ones coming soon hopefully!)

_Note: ml5.js tutorials below were taught using an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/ml5.js-Resources#ml5js-10-resources) for more information._

- [A Beginner's Guide to Machine Learning with ml5.js - video tutorial](https://youtu.be/jmznx0Q1fP0?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
- [ml5.js: Image Classification with MobileNet - video tutorial](https://youtu.be/yNkAuWz5lnY?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
- [ml5.js: Webcam Image Classification - video tutorial](https://youtu.be/D9BoBSkLvFo?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.

## Supplemental Materials

- [What is machine learning?](https://www.technologyreview.com/s/612437/what-is-machine-learning-we-drew-you-another-flowchart/) by Karen Hao.
- [Algorithmic Accountability: A Primer](https://datasociety.net/wp-content/uploads/2018/04/Data_Society_Algorithmic_Accountability_Primer_FINAL-4.pdf) from Data & Society.
- [Seeing Machines Think](https://youtu.be/ugkfmHBW74Q) by Martin Wattenberg and Fernanda Viégas.
- [Weird Intelligence](https://vimeo.com/304110435) by Kyle McDonald.
- [A Brief History of Neural Nets and Deep Learning](http://www.andreykurenkov.com/writing/a-brief-history-of-neural-nets-and-deep-learning/) by Andrey Kurenkov.
- [ImageNet: The Data That Transformed AI Research—and Possibly the World](https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/) by Dave Gershgorn.
- [How we teach computers to understand pictures](https://www.youtube.com/watch?v=40riCqvRoMs) by Fei-Fei Li (_Note: Fei-Fei Li is no longer at Google; she is currently Co-Director of the Stanford Human-Centered AI Institute_).

## Assignment 1

1. Create a blog (or a category on a blog) for the course. (You may use any means for publishing your assignments including, but not limited to, a GitHub markdown file, Notion page, medium post, etc.) [This wiki page has resources and information on creating your own blog](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/Documentation-Blog-Resources). Additionally, here is some [helpful information on privacy options for your blog](https://www.nyu.edu/servicelink/KB0012245).
2. Read [A People’s Guide to AI](https://alliedmedia.org/wp-content/uploads/2020/09/peoples-guide-ai.pdf) by Mimi Onuoha and Mother Cyborg (Diana Nucera).
3. Explore [ImageNet](http://image-net.org/index), [ImageNet sample images](https://github.com/EliSchwartz/imagenet-sample-images/blob/master/gallery.md), [Kaggle ImageNet Mini 1000](https://www.kaggle.com/datasets/ifigotin/imagenetmini-1000). What surprises you about this data set? What questions do you have? Thinking back to last week’s assignment, can you think of any ethical considerations around how this data was collected Are there privacy considerations with the data?
4. Using the [code examples above](#code-examples), try running image classification on a variety of images. Pick at least 10 objects in your room. How many of these does it recognize? What other aspects of the image affect the classification, including but not limited to position, scale, lighting, etc.
5. Document your thoughts on MobileNet and image classification in a blog post and add a link to the [Assignment 1 Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/Assignment-1).

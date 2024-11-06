# Transformers.js with p5.js

- [SLIDES](https://docs.google.com/presentation/d/1FTKmN9ZWyrBjQyp6-osPyvLzKiXqjqCSZvb0-FIqme0/edit?usp=sharing) - Thank you @xenova!

## Objectives

- 🎯 Understand what Transformers.js is and its applications for creative projects.
- 🔌 Learn how to integrate an ES6 module like Transformers.js into p5.js using dynamic imports.
- ⏳ Gain experience with asynchronous JavaScript (async/await) for handling machine learning models.
- 🤖 Explore a selection of pre-trained models available in Transformers.js (e.g., sentiment analysis, object detection, Whisper, LLMs).
- 🚀 Learn about the new WebGPU support and how to use it for accelerated machine learning.

## Transformers.js Guides and Documentation

- 📚 [Transformers.js Documentation](https://huggingface.co/docs/transformers.js/)
- 💻 [Transformers.js GitHub Repository](https://github.com/huggingface/transformers.js)
- 📰 [Transformers.js v3: WebGPU Support, New Models & Tasks, and More…](https://huggingface.co/blog/transformersjs-v3)
- 🔍 [Transformers.js Examples and Demos](https://github.com/huggingface/transformers.js-examples)
- 📦 [Official npm package](https://www.npmjs.com/package/@huggingface/transformers)

## JavaScript for Transformers.js

- 🔄 [JavaScript Asynchronous Programming: Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- 📦 [JavaScript Dynamic Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- ⚙️ [WebGPU Overview](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)
- 🚂 [Videos on promises, async/await, and try/catch](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)
- 🚂 [Video on arrow functions](https://youtu.be/mrYMzpbFz18)
- 📚 [toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)
- 📚 [Object and Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- 🚂 [let vs. const](https://youtu.be/2iLVFyYwyRA)

## p5.js DOM Basics and Resources

- 🌐 [Beyond the Canvas, p5.js tutorial](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
- 🚂 [What is HTML? (video)](https://youtu.be/URSH0QpxKo8?list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX)
- 🚂 [What is CSS? (video)](https://youtu.be/zGL8q8iQSQw?list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX)
- 🚂 [Creating DOM Elements with p5.js (video)](https://youtu.be/lAtoaRz78I4?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- 🎨 [CSS Property Reference](http://www.blooberry.com/indexdot/css/propindex/all.htm)

## Example Projects and Demos

- 🎮 [Doodle Dash with Transformers.js](https://huggingface.co/blog/ml-web-games)
- 🖼️ [NYU Shanghai DURF research project on Image Segmentation with transformers.js](https://github.com/ml5js/ml5-extra-imagesegmentation)

### Code Examples

- [Object Detection - Image](https://editor.p5js.org/ima_ml/sketches/LtppKXu-W)
- [Object Detection - Video](https://editor.p5js.org/ima_ml/sketches/8LsV70u0O)
- [Sentiment Analysis](https://editor.p5js.org/ima_ml/sketches/z9bNnHDh7)
- [Depth Estimation - Image](https://editor.p5js.org/ima_ml/sketches/tGyF87f59)
- [Depth Estimation - Video](https://editor.p5js.org/ima_ml/sketches/pt4HxyyIk)
- [Text Generator](https://editor.p5js.org/ima_ml/sketches/ISIVwlcK9)

## Assignment

For this week's assignment:

1. Choose any model available in Transformers.js and create a p5.js sketch using it. Try [any transformer.sj compatible model](https://huggingface.co/models?library=transformers.js&sort=trending)! Some things you might look for are:

   - **Object Detection**: 🕵️ Detect objects in an image.
   - **Image Segmentation**: ✂️ Segment an image into parts.
   - **Text Generation**: ✍️ Generate text based on a user prompt.
   - **Whisper (Speech-to-Text)**: 🎙️ Transcribe audio from a file or real-time microphone.
   - **Depth Estimation**: 📏 Create a depth map from an image or video feed.

2. Compare and Contrast:

   - Compare your experience of using Transformers.js with ml5.js. Reflect on differences in ease of use, performance, model variety, and integration with p5.js.

3. Document your sketch in a blog post and add a link to the [Assignment Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/Assignment-5). Remember to include visual documentation (screenshots, GIFs, etc) Also, please document what did and did not work! What errors did you encounter with Transformers.js?

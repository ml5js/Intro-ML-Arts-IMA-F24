# Language Models

- [LLM / transformer slides](https://docs.google.com/presentation/d/1uGS4w_UumzQAoq03S-sc9Nn7_hBaRNbQJf1G2SNXooU/edit?usp=sharing)

## Markov Chains

- 💻 [Weighted Selection p5.js example](https://editor.p5js.org/a2zitp/sketches/un8B-P4jg) (with temperature!) along with 🚂 [Weighted Selection Algorithm video](https://youtu.be/ETphJASzYes)
- 📚 [How to Generate Text Hugging Face blog post](https://huggingface.co/blog/how-to-generate) (covers temperature, top_p, and top_k)
- 📕 [Markov Chains](http://setosa.io/blog/2014/07/26/markov-chains/) by Victor Powell and Lewis Lehe

## Sequential Data and Recurrent Neural Networks

- 📚 [The Unreasonable Effectiveness of RNNs](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)
- 🎨 [Four Experiments in Handwriting with a Neural Network](https://distill.pub/2016/handwriting/) (Drawing)
- 📖 [10 things artificial intelligence did in 2018](http://aiweirdness.com/post/181621835642/10-things-artificial-intelligence-did-in-2018) by Janelle Shane (Text)
- 📖 [Writing with the Machine](https://www.robinsloan.com/notes/writing-with-the-machine/)

## Transformers and Large Language Models

> among the reasons I use large pre-trained language models sparingly in my computer-generated poetry practice is that being able to know whose voices I'm speaking with is... actually important, as is being understanding how the output came to have its shape - [@aparrish](https://twitter.com/aparrish/), [full thread](https://twitter.com/aparrish/status/1286808606466244608)

- 📚 [Watch an A.I. Learn to Write by Reading Nothing but **\_\_\_\_**](https://www.nytimes.com/interactive/2023/04/26/upshot/gpt-from-scratch.html) by Aatish Bhatia
- 📚 [Attention is All You Need](https://arxiv.org/abs/1706.03762) - Original "Transformer" paper from 2017, also [Neural Machine Translation by Jointly Learning to Align and Translate](https://arxiv.org/abs/1409.0473) -- Attention paper from 2014
- 📚 [What Are Transformer Models and How Do They Work?](https://docs.cohere.com/docs/transformer-models)
- 🎥 [How large language models work, a visual intro to transformers](https://youtu.be/wjZofJX0v4M) by 3Blue1Brown
- 🎥 [Intro to Large Language Models](https://youtu.be/zjkBMFhNj_g) by Andrej Karpathy and [Intro to LLMs slides](https://drive.google.com/file/d/1pxx_ZI7O-Nwl7ZLNk5hI3WzAsTLwvNU7/view)
- 📖 [Language Models Can Only Write Ransom Notes](https://posts.decontextualize.com/language-models-ransom-notes/) by Allison Parrish

## LLM Training

- 🦙 [LLaMA: Open and Efficient Foundation Language Models](https://arxiv.org/pdf/2302.13971.pdf)
- 🦙 [The Llama 3 Herd of Models](https://arxiv.org/pdf/2407.21783)
- 🦜 [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜](https://dl.acm.org/doi/10.1145/3442188.3445922)
- 🔍 [The Foundation Model Transparency Index](https://crfm.stanford.edu/fmti/May-2024/index.html)
- 📖 [Generative AI’s Illusory Case for Fair Use](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4924997) by Jacqueline Charlesworth

### Datasets for LLMs

- 🔢 [Common Crawl](https://commoncrawl.org/)
- 🔢 [The Pile](https://pile.eleuther.ai/)

### Climate Impact

- 🌏 [The Internet’s Next Great Power Suck](https://www.theatlantic.com/technology/archive/2023/08/ai-carbon-emissions-data-centers/675094/)
- ⚡️ [Carbon Emissions and Large Neural Network Training ](https://arxiv.org/ftp/arxiv/papers/2104/2104.10350.pdf)

## Code Examples and Implementations

### Markov chains

- 🚂 [Markov Chain Coding Challenge video + code example](https://thecodingtrain.com/challenges/42-markov-chain-name-generator)
- 💻 [Markov Chain p5.js code examples](https://editor.p5js.org/a2zitp/collections/WEXEPRHuE)

### Replicate

_Examples will be shared over email due to use of ITP proxy server._

- 🎨 Single Prompt + Reply to Llama hosted on Replicate
- 💬 ChatBot Conversations Llama hosted on Replicate. This follows the specification in the [Llama 3 Model Card](https://www.llama.com/docs/model-cards-and-prompt-formats/meta-llama-3/).

### Ollama

_These examples require working with p5.js locally on your computer and outside of the web editor. Some resources for doing so can be found in [my workflow video series](https://thecodingtrain.com/tracks/2018-workflow)._

- 🦙 [Ollama: Run LLMs locally](https://ollama.ai/)
- [Ollama chat completion API](https://github.com/ollama/ollama/blob/main/docs/api.md#generate-a-chat-completion)
- 💻 [In class Ollama test](ollama)
- 💻 [Ollama with JavaScript](https://github.com/Programming-from-A-to-Z/Ollama-Examples)

### Transformers.js

- [Chatbot with Conversation History](https://editor.p5js.org/ima_ml/sketches/oGE7UEmwh)
- [Text Completion](https://editor.p5js.org/ima_ml/sketches/e9PFp5BkJ)

## Assignment

- Read [Language models can only write ransom notes](https://posts.decontextualize.com/language-models-ransom-notes/) by Allison Parrish and review the [The Foundation Model Transparency Index](https://crfm.stanford.edu/fmti/May-2024/index.html).
- Experiment with prompting a language model in some way other than a provided interface (e.g., ChatGPT) and document the results in a blog post. You can use [any of the code examples above](#code-examples-and-implementations) and/or try a variety of LLMs locally with [ollama](https://ollama.ai/). Reflect on one or more of the following questions:
  - How does the concept of LLMs as “ransom notes” influence your perception of using these models creatively?
  - How does the hidden origin of the text that LLMs generate affect your sense of authorship or originality in your creative work?
  - How does the metaphor of "collage" used to describe LLMs align with or differ from your creative process?
  - How would you compare working with an LLM to other forms of text generation, such as using a Markov chain?
- Document your experminents in a blog post and add a link to the [Assignment Wiki page](https://github.com/ml5js/Intro-ML-Arts-IMA-F24/wiki/Assignment-6). Remember to include visual documentation (screenshots, GIFs, etc)

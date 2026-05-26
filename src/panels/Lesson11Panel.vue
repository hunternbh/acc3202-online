<script setup>
import PanelView from "../components/PanelView.vue";

defineProps({
  panelTitle: {
    type: String,
    required: true
  }
});

const tabs = [
  {
    id: "lesson-11-tab-1",
    title: "Generative AI Video Lesson",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 11 opening video",
    copy: "Mastering the art of prompt engineering and staying safe from deepfakes. (Video link coming soon)",
    points: [
      "Prompt engineering is the skill of crafting inputs to get the best results from AI.",
      "Deepfakes present new challenges for authenticity and trust in the digital age."
    ]
  },
  {
    id: "lesson-11-tab-2",
    title: "Mastering Prompt Engineering",
    kind: "text",
    paragraphs: [
      "To get the most out of an AI chatbot like ChatGPT or Claude, you need to learn 'prompt engineering'. This isn't just about asking a question; it's about providing context, constraints, and clear instructions. A good prompt often includes a 'role' for the AI to play (e.g., 'Act as a senior auditor').",
      "Other techniques include 'few-shot prompting', where you provide a few examples of the desired output, and 'chain-of-thought prompting', where you ask the AI to explain its reasoning step-by-step. The more specific and structured your prompt, the more useful the response will be."
    ],
    points: [
      "Persona: Assigning a specific role or expertise to the AI.",
      "Context: Providing background information to guide the response.",
      "Constraints: Setting limits on length, format, or tone.",
      "Iterative Refinement: Improving the prompt based on previous outputs."
    ],
    quiz: {
      prompt: "What is 'few-shot prompting'?",
      choices: ["Using only a few words in a prompt", "Providing a few examples of the desired output in the prompt", "Asking the AI to respond as fast as possible"],
      answer: 1
    }
  },
  {
    id: "lesson-11-tab-3",
    title: "The Danger of Deepfakes",
    kind: "text",
    paragraphs: [
      "Deepfakes are synthetic media in which a person in an existing image or video is replaced with someone else's likeness using artificial neural networks. While they can be used for entertainment, they also pose significant risks for misinformation, fraud, and identity theft.",
      "For accountants and auditors, deepfakes could be used to create fake evidence, such as a video of a CEO making a false statement or a forged audio recording of an authorization. It is increasingly important to verify the source and authenticity of all digital media."
    ],
    points: [
      "Synthetic Media: Content created or modified by AI.",
      "Social Engineering: Using deepfakes to trick people into giving up secrets.",
      "Detection: Looking for artifacts like unnatural blinking or inconsistent lighting."
    ],
    quiz: {
      prompt: "Why are deepfakes a concern for the accounting profession?",
      choices: ["They make financial statements harder to read", "They can be used to create fraudulent evidence or unauthorized instructions", "They are too expensive to produce"],
      answer: 1
    }
  },
  {
    id: "lesson-11-tab-4",
    title: "Large Language Models (LLMs)",
    kind: "text",
    paragraphs: [
      "Chatbots today are powered by Large Language Models (LLMs). These models are trained on vast amounts of text data to predict the next word in a sequence. They don't 'know' facts in the way humans do; rather, they understand the statistical relationships between words.",
      "This leads to a phenomenon called 'hallucination', where the AI confidently states something that is factually incorrect. This is why you must ALWAYS verify the output of an LLM, especially when dealing with financial data or legal regulations. The AI is a powerful assistant, but it is not a substitute for human judgment."
    ],
    points: [
      "Prediction: LLMs work by predicting the most likely next word.",
      "Hallucination: When an AI generates false or nonsensical information.",
      "Verification: The essential step of checking AI output against reliable sources."
    ],
    quiz: {
      prompt: "What does it mean when an AI 'hallucinates'?",
      choices: ["It generates factually incorrect information that sounds plausible", "It stops responding to prompts", "It starts speaking a different language"],
      answer: 0
    }
  },
  {
    id: "lesson-11-tab-5",
    title: "Student Reminders",
    kind: "text",
    paragraphs: [
      "Generative AI is a tool, and like any tool, its value depends on the skill of the person using it. Learn to use it wisely and ethically.",
      "Remember: Connect homework is due July 21!"
    ],
    points: [
      "Connect Homework: Due 21 July, Sunday, 2359.",
      "Vibe Coding Individual Project 2: Due 12 August, 2359."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

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
    id: "lesson-12-tab-1",
    title: "AI Hardware & Future Video",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 12 opening video",
    copy: "The power behind the models and the future of human-AI collaboration. (Video link coming soon)",
    points: [
      "GPUs are the engines that drive modern AI training and inference.",
      "The relationship between humans and AI is moving towards deep integration."
    ]
  },
  {
    id: "lesson-12-tab-2",
    title: "Why GPUs Matter for AI",
    kind: "text",
    paragraphs: [
      "Traditional Central Processing Units (CPUs) are designed for complex, sequential tasks—they are like a high-speed car that can do one thing very fast. Graphics Processing Units (GPUs), on the other hand, are designed for massive parallelism. They can perform thousands of simple mathematical operations simultaneously.",
      "AI models, especially neural networks, require trillions of these simple calculations to process data. This makes GPUs the perfect hardware for AI. Without the parallel processing power of GPUs (originally developed for gaming!), the modern AI revolution simply wouldn't be possible."
    ],
    points: [
      "Sequential vs. Parallel: CPUs do things one by one; GPUs do many things at once.",
      "Efficiency: GPUs can train AI models in days that would take CPUs years.",
      "Inference: GPUs also speed up the process of getting an answer from a trained model."
    ],
    quiz: {
      prompt: "Why are GPUs preferred over CPUs for training large AI models?",
      choices: ["They are cheaper to buy", "They are better at performing massive parallel calculations", "They use less electricity"],
      answer: 1
    }
  },
  {
    id: "lesson-12-tab-3",
    title: "Artificial Neural Networks",
    kind: "text",
    paragraphs: [
      "AI models like GPT-4 are built using 'artificial neural networks', which are loosely inspired by the structure of the human brain. These networks consist of layers of interconnected 'neurons' that process information and pass it to the next layer.",
      "By adjusting the 'weights' of the connections between these neurons during training, the model learns to recognize patterns and make predictions. While they are far simpler than biological brains, they are capable of incredible feats of language, image, and data processing."
    ],
    points: [
      "Neurons: The basic processing units in a neural network.",
      "Layers: Information flows through input, hidden, and output layers.",
      "Weights: Parameters that determine the strength of connections between neurons."
    ],
    quiz: {
      prompt: "What biological structure served as the inspiration for modern AI models?",
      choices: ["The circulatory system", "The human brain", "The muscular system"],
      answer: 1
    }
  },
  {
    id: "lesson-12-tab-4",
    title: "Becoming AI: The Future",
    kind: "text",
    paragraphs: [
      "As AI becomes more sophisticated, we are moving beyond seeing it as a separate tool and towards a future of 'human-AI collaboration'. This is what we call 'Becoming AI'—where our own capabilities are augmented and extended by artificial intelligence.",
      "For an accountant, this might mean having an AI 'co-pilot' that constantly monitors for risk, suggests tax strategies, or drafts complex financial reports. Your value will come from your ability to direct the AI, interpret its findings, and apply human judgment to the most difficult ethical and strategic questions."
    ],
    points: [
      "Augmentation: Using AI to enhance human productivity and decision-making.",
      "Human-in-the-Loop: Ensuring human oversight for critical AI outputs.",
      "Adaptability: The most important skill for professionals in the age of AI."
    ],
    quiz: {
      prompt: "What is the core idea behind 'human-AI collaboration'?",
      choices: ["AI will eventually do everything without human input", "Humans will use AI to extend and enhance their own capabilities", "AI and humans will compete for the same jobs"],
      answer: 1
    }
  },
  {
    id: "lesson-12-tab-5",
    title: "Student Reminders",
    kind: "text",
    paragraphs: [
      "We are living through a historic shift in technology. Embrace the tools, understand the hardware, and prepare yourself for a career where AI is your constant partner.",
      "Finish strong! Your projects are due on August 12."
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

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
    id: "lesson-10-tab-1",
    title: "Data & AI Foundations Video",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 10 opening video",
    copy: "From bits and bytes to the basics of AI. (Video link coming soon)",
    points: [
      "Understanding how data is physically stored is the foundation of computer science.",
      "Artificial Intelligence is a rapidly evolving field with deep roots in data structure."
    ]
  },
  {
    id: "lesson-10-tab-2",
    title: "Bits, Bytes, and Data Hierarchy",
    kind: "text",
    paragraphs: [
      "At the lowest level, all computer data is stored as 'bits' (binary digits) representing either a 0 or a 1. A group of 8 bits is called a 'byte', which is the standard unit for representing a single character like 'A' or '$'.",
      "We organize these bytes into a hierarchy: characters form 'fields' (like a name), fields form 'records' (like all info for one customer), records form 'files' (the whole customer table), and related files form a 'database'. Understanding this structure is essential for any professional working with digital information."
    ],
    points: [
      "Bit: The smallest unit of data (0 or 1).",
      "Byte: 8 bits, representing one character.",
      "Field: A single data point within a record.",
      "Record: A collection of related fields.",
      "File: A collection of related records."
    ],
    quiz: {
      prompt: "What is the smallest unit of data in a computer system?",
      choices: ["A Byte", "A Field", "A Bit"],
      answer: 2
    }
  },
  {
    id: "lesson-10-tab-3",
    title: "What is Artificial Intelligence?",
    kind: "text",
    paragraphs: [
      "Artificial Intelligence (AI) refers to the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (acquiring information and rules), reasoning (using rules to reach conclusions), and self-correction.",
      "In the past, AI was mostly 'rule-based'—if this happens, then do that. Today, we focus more on 'machine learning', where algorithms use statistical techniques to enable computers to 'learn' from data without being explicitly programmed for every specific task."
    ],
    points: [
      "Simulation: Machines mimicking human cognitive functions.",
      "Machine Learning: Systems that improve their performance through experience.",
      "Deep Learning: A subset of machine learning based on artificial neural networks."
    ],
    quiz: {
      prompt: "What is the primary difference between traditional programming and machine learning?",
      choices: ["Machine learning requires more electricity", "Machine learning allows systems to learn from data without explicit programming for every scenario", "Traditional programming is only used for accounting"],
      answer: 1
    }
  },
  {
    id: "lesson-10-tab-4",
    title: "The AI Revolution in Accounting",
    kind: "text",
    paragraphs: [
      "AI is transforming the accounting profession by automating repetitive tasks like data entry and bank reconciliation. This allows accountants to focus on higher-value activities like strategic analysis and advisory services.",
      "AI can also analyze massive datasets to identify patterns and anomalies that a human might miss. This is particularly useful in auditing for detecting fraud or in tax planning for optimizing complex financial structures. The future of accounting is not human vs. machine, but human plus machine."
    ],
    points: [
      "Automation: Reducing manual effort for routine tasks.",
      "Anomaly Detection: Identifying unusual patterns in large datasets.",
      "Strategic Value: Shifting focus from processing to analysis and judgment."
    ],
    quiz: {
      prompt: "How is AI most likely to impact the role of the accountant?",
      choices: ["By replacing all accountants with robots", "By automating routine tasks and enabling higher-level analysis", "By making the use of spreadsheets obsolete"],
      answer: 1
    }
  },
  {
    id: "lesson-10-tab-5",
    title: "Student Reminders",
    kind: "text",
    paragraphs: [
      "The world is changing fast. Understanding the basics of data and AI will ensure you remain relevant and capable in the digital economy.",
      "Don't forget the Vibe Coding project was released! Check Brightspace for details."
    ],
    points: [
      "Connect Homework: Due 21 July, Sunday, 2359.",
      "Vibe Coding Individual Project 2: Released! Due 12 August, 2359."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

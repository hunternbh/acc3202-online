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
    id: "lesson-7-tab-1",
    title: "Internal Controls Video",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 7 opening video",
    copy: "Understand how internal controls protect organizations from fraud and error. (Video link coming soon)",
    points: [
      "Internal controls are processes designed to provide reasonable assurance regarding objectives.",
      "AIS is a critical component for implementing and monitoring these controls."
    ]
  },
  {
    id: "lesson-7-tab-2",
    title: "What are Internal Controls?",
    kind: "text",
    paragraphs: [
      "Internal control is a process, effected by an entity's board of directors, management, and other personnel, designed to provide reasonable assurance regarding the achievement of objectives in three categories: effectiveness and efficiency of operations, reliability of financial reporting, and compliance with applicable laws and regulations.",
      "For an AIS, this means ensuring that data is entered accurately, processed correctly, and stored securely. Without strong internal controls, a system's output cannot be trusted, which can lead to poor decision-making and legal trouble."
    ],
    points: [
      "Operations: Achieving the organization's mission efficiently.",
      "Reporting: Ensuring financial statements are accurate and reliable.",
      "Compliance: Following rules, laws, and internal policies."
    ],
    quiz: {
      prompt: "What is the primary goal of internal controls in an organization?",
      choices: ["To eliminate all risk entirely", "To provide reasonable assurance that objectives are met", "To replace management's decision-making"],
      answer: 1
    }
  },
  {
    id: "lesson-7-tab-3",
    title: "Preventive vs. Detective Controls",
    kind: "text",
    paragraphs: [
      "Internal controls are often categorized by when they happen. Preventive controls act as a 'gatekeeper' to stop problems before they occur. Detective controls act as a 'policeman' to find problems after they have happened.",
      "Examples of preventive controls in an AIS include password requirements, segregation of duties (e.g., the person who writes the checks doesn't sign them), and data entry validation. Detective controls include bank reconciliations, trial balances, and internal audits."
    ],
    points: [
      "Preventive: Stops errors or fraud before they happen (e.g., locking a door).",
      "Detective: Finds errors or fraud after they happen (e.g., checking a security camera).",
      "Corrective: Fixes a problem after it has been detected."
    ],
    quiz: {
      prompt: "Which of the following is an example of a preventive control in an accounting system?",
      choices: ["Monthly bank reconciliation", "Requiring a supervisor's approval for large purchases", "An internal audit review"],
      answer: 1
    }
  },
  {
    id: "lesson-7-tab-4",
    title: "The Role of AIS in Controls",
    kind: "text",
    paragraphs: [
      "A modern AIS makes implementing controls much easier and more effective. Instead of relying on physical signatures and manual checks, we can build 'business rules' directly into the software. This is known as automated control.",
      "For example, a system can automatically prevent an order from being processed if a customer exceeds their credit limit, or it can flag a transaction if the price deviates too much from the standard cost. These automated controls reduce human error and make it harder for fraud to occur unnoticed."
    ],
    points: [
      "Automated Controls: Built directly into the software to enforce rules.",
      "Audit Trail: A digital record showing who did what and when in the system.",
      "Segregation of Duties: Digitally restricting user access to specific functions."
    ],
    quiz: {
      prompt: "How does a 'digital audit trail' enhance internal control?",
      choices: ["It makes the system run faster", "It provides a record of all system activity for later review", "It automatically deletes old data"],
      answer: 1
    }
  },
  {
    id: "lesson-7-tab-5",
    title: "Student Reminders",
    kind: "text",
    paragraphs: [
      "Internal controls are a core part of an accountant's value. You aren't just recording numbers; you are ensuring the integrity of the entire organizational system.",
      "Stay focused on your assignments. The midterm is approaching in Week 7!"
    ],
    points: [
      "Connect Homework: Due 21 July, Sunday, 2359.",
      "SQL Individual Project 1: Due 12 August, 2359."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

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
    id: "lesson-14-tab-1",
    title: "Midterm Review Video",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 14 opening video",
    copy: "Reviewing the AIS portion of the course and preparing for the midterm. (Video link coming soon)",
    points: [
      "The midterm covers all material from Lesson 1 through Lesson 13.",
      "Focus on understanding the core concepts and how they apply to accounting systems."
    ]
  },
  {
    id: "lesson-14-tab-2",
    title: "AIS Course Review",
    kind: "text",
    paragraphs: [
      "We have covered a vast amount of territory in this course, from the foundations of AIS and BPMN modeling to advanced topics like SQL, XBRL, and Artificial Intelligence. The common thread is how technology is used to capture, process, and protect financial information.",
      "As you prepare for the midterm, review the key frameworks (COSO, COBIT, NIST), the importance of internal controls, and the practical skills of data management in SQL and Excel. Remember that an AIS is not just software—it is a combination of people, processes, and technology."
    ],
    points: [
      "Modeling: BPMN and UML for understanding business processes.",
      "Data: SQL for retrieval and Excel for analysis and cleaning.",
      "Security: Encryption, digital signatures, and internal controls.",
      "Future: The role of AI, LLMs, and hardware like GPUs."
    ],
    quiz: {
      prompt: "Which of the following best describes an Accounting Information System (AIS)?",
      choices: ["A software program for entering journal entries", "A system of people, processes, and technology used to manage financial data", "A database for storing customer information"],
      answer: 1
    }
  },
  {
    id: "lesson-14-tab-3",
    title: "Midterm Preparation",
    kind: "text",
    paragraphs: [
      "The midterm will be held in class during Week 7. It will consist of multiple-choice questions, short answers, and potentially a practical component (like a SQL query or a BPMN diagram).",
      "The best way to study is to review the instructional panels, your project work, and the textbook readings. Pay close attention to the 'Key Points' and 'Quiz' questions in each lesson, as they highlight the most important concepts that are likely to be tested."
    ],
    points: [
      "Format: Multiple choice, short answer, and practical applications.",
      "Focus: Concepts, frameworks, and practical technology skills.",
      "Location: Held in-person during your scheduled class time."
    ],
    quiz: {
      prompt: "Where can you find the most important concepts to study for the midterm?",
      choices: ["Only in the textbook", "In the instructional panels, quizzes, and project assignments", "By searching on Google"],
      answer: 1
    }
  },
  {
    id: "lesson-14-tab-4",
    title: "Final Deadline Checklist",
    kind: "text",
    paragraphs: [
      "As we wrap up the course, please ensure you have completed all outstanding assignments. These deadlines are firm, so plan your time accordingly to avoid any last-minute issues.",
      "Note that both the SQL and Vibe Coding projects are due on August 12. These are substantive assignments that will take time to complete correctly. Don't wait until the final week!"
    ],
    points: [
      "Connect (Week 3 material): Due 14 July, 2359.",
      "Connect (Week 4+ material): Due 21 July, 2359.",
      "SQL Individual Project 1: Due 12 August, 2359.",
      "Vibe Coding Individual Project 2: Due 12 August, 2359.",
      "Midterm: Held in class during Week 7."
    ],
    quiz: {
      prompt: "When is the final deadline for both the SQL and Vibe Coding projects?",
      choices: ["July 21", "August 12", "July 14"],
      answer: 1
    }
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

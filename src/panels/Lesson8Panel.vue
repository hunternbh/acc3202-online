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
    id: "lesson-8-tab-1",
    title: "Frameworks Video Lesson",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 8 opening video",
    copy: "Learn about the frameworks that guide organizational controls and governance. (Video link coming soon)",
    points: [
      "Frameworks provide a structured approach to managing risk and internal controls.",
      "COSO, COBIT, and NIST are the most widely recognized standards in the profession."
    ]
  },
  {
    id: "lesson-8-tab-2",
    title: "The COSO Framework",
    kind: "text",
    paragraphs: [
      "The Committee of Sponsoring Organizations of the Treadway Commission (COSO) developed a framework that is the 'gold standard' for internal control. It consists of five integrated components: Control Environment, Risk Assessment, Control Activities, Information and Communication, and Monitoring Activities.",
      "The Control Environment is the 'tone at the top'—the foundation for all other components. Risk Assessment involves identifying and analyzing risks to the achievement of objectives. Control Activities are the actual policies and procedures (like the ones we discussed in Lesson 7) that help ensure management directives are carried out."
    ],
    points: [
      "Control Environment: Management's philosophy and operating style.",
      "Risk Assessment: Identifying where things could go wrong.",
      "Monitoring: Ongoing evaluations to ensure controls are functioning as intended."
    ],
    quiz: {
      prompt: "Which COSO component is often referred to as the 'tone at the top'?",
      choices: ["Risk Assessment", "Control Environment", "Monitoring Activities"],
      answer: 1
    }
  },
  {
    id: "lesson-8-tab-3",
    title: "COBIT for IT Governance",
    kind: "text",
    paragraphs: [
      "While COSO is a general framework for internal control, COBIT (Control Objectives for Information and Related Technologies) is specifically designed for the governance and management of enterprise IT. It helps organizations bridge the gap between technical issues, business risks, and control requirements.",
      "For accountants, COBIT is essential when auditing or designing IT systems. It provides a common language for business managers, IT professionals, and auditors to ensure that IT is delivering value and that its risks are being managed effectively."
    ],
    points: [
      "Governance: Ensuring that stakeholder needs are met by the IT system.",
      "Management: Planning, building, running, and monitoring IT activities.",
      "Alignment: Ensuring IT goals support the overall business goals."
    ],
    quiz: {
      prompt: "What is the primary focus of the COBIT framework?",
      choices: ["Financial statement preparation", "Governance and management of enterprise IT", "Physical security of the office building"],
      answer: 1
    }
  },
  {
    id: "lesson-8-tab-4",
    title: "NIST Cybersecurity Framework",
    kind: "text",
    paragraphs: [
      "The NIST (National Institute of Standards and Technology) Cybersecurity Framework provides a high-level taxonomy of cybersecurity outcomes and a methodology to assess and manage those outcomes. It is organized around five core functions: Identify, Protect, Detect, Respond, and Recover.",
      "In an era of constant cyber threats, accountants must understand these functions to evaluate an organization's resilience. It's not just about stopping a hack (Protect), but also about having a plan to find the hack (Detect) and get back to business (Recover)."
    ],
    points: [
      "Identify: Understanding the organization's assets and risks.",
      "Respond: Taking action once a cybersecurity incident is detected.",
      "Recover: Restoring capabilities or services that were impaired."
    ],
    quiz: {
      prompt: "Which NIST function involves taking action to restore services after a cyber attack?",
      choices: ["Identify", "Protect", "Recover"],
      answer: 2
    }
  },
  {
    id: "lesson-8-tab-5",
    title: "Student Reminders",
    kind: "text",
    paragraphs: [
      "Mastering these frameworks will give you a major advantage in your career. They provide the 'map' you need to navigate the complex world of business risk.",
      "Don't forget to keep working on your SQL project. It's due August 12!"
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

<script setup>
import PanelView from "../components/PanelView.vue";

defineProps({
  panelTitle: {
    type: String,
    required: true
  }
});

// Edit this array to control Lesson 2 tabs, text, video labels, and MCQs.
const tabs = [
  {
    id: "lesson-2-tab-1",
    title: "Opening video",
    kind: "video",
    embedUrl: "https://www.youtube.com/embed/cXofWCODnAg",
    videoTitle: "Lesson 2 opening video",
    copy: "Begin Lesson 2 with the course video. Watch with your distractions set aside, then use the reading tabs to connect accounting foundations, systems thinking, and AIS career pathways.",
    points: [
      "Listen for the three accounting foundations named in the video.",
      "Notice how the restaurant POS example turns a simple card tap into a system story.",
      "Keep the career and certification examples in mind for the Brightspace questions."
    ],
    quiz: {
      prompt: "The video asks you to start the lesson by learning with:",
      choices: ["Focused attention", "More distractions", "A hidden login"],
      answer: 0
    }
  },
  {
    id: "lesson-2-tab-2",
    title: "Accounting foundations",
    kind: "text",
    paragraphs: [
      "Before we talk about Accounting Information Systems, begin with something more basic. By this point in an accounting degree, you should have some familiarity with three foundations: the conceptual framework, the FASB Accounting Standards Codification, usually called the ASC, and the financial statements.",
      "The conceptual framework guides how we think about accounting standards. The ASC is where U.S. GAAP lives, so serious accounting learning should not rely only on textbooks and slides. Financial statements make accounting visible, and public company annual reports such as Form 10-Ks can be found through EDGAR.",
      "AIS becomes clearer when you know why accounting information matters and where its source documents come from. The conceptual framework helps define useful information for reporting. From there, we can ask what information an AIS should capture, process, control, and communicate."
    ],
    points: [
      "Conceptual framework: the guide for useful accounting information.",
      "ASC: the source for U.S. GAAP.",
      "Financial statements and annual reports: where accounting outputs become visible."
    ],
    quiz: {
      prompt: "Which source is identified as the home of U.S. GAAP?",
      choices: ["The ASC", "A random dashboard", "A restaurant receipt"],
      answer: 0
    }
  },
  {
    id: "lesson-2-tab-3",
    title: "What is AIS?",
    kind: "text",
    paragraphs: [
      "A textbook definition of an Accounting Information System is a system that records, processes, summarizes, reports, and communicates business transactions so people can make decisions. It should also maintain appropriate internal controls over those transactions.",
      "A system takes inputs, processes them, and produces outputs. A company receives inputs such as sales orders, invoices, payments, purchase requests, payroll records, inventory movements, customer data, vendor data, and employee activity. The AIS classifies, records, checks, stores, and summarizes those inputs. It then produces outputs such as reports, dashboards, journal entries, financial statements, audit trails, exception reports, and management decisions.",
      "Think about a restaurant POS system. The server enters an order. The customer pays by card. The POS sends a payment request through the payment processor and card network to the customer bank. If approval returns, the sale, payment method, sales tax, tip, and receipt can be recorded. A simple card tap hides many layers of information flow, authorization, and control."
    ],
    points: [
      "Ask what enters the system.",
      "Ask what rules and checks process the data.",
      "Ask what outputs users and auditors need to trust."
    ],
    quiz: {
      prompt: "Which question belongs in AIS thinking?",
      choices: ["Can we trust the information produced by the system?", "Can the page hide all data?", "Can a transaction avoid every rule?"],
      answer: 0
    }
  },
  {
    id: "lesson-2-tab-4",
    title: "Useful information",
    kind: "text",
    paragraphs: [
      "What kind of information should an AIS capture? Not every field is useful. A company can collect thousands of data points, but the data should help someone decide, confirm, predict, evaluate, or understand something that matters.",
      "Relevant information helps decision making. Confirmatory value helps users confirm or correct earlier expectations. Predictive value supports forecasts about what may happen next. Materiality asks whether an omission or misstatement could affect a decision.",
      "Faithful representation means the information should represent what actually happened. It should be complete enough to understand, neutral rather than biased, and free from error in recording, processing, classifying, and reporting."
    ],
    points: [
      "Relevance includes confirmatory value, predictive value, and materiality.",
      "Faithful representation includes completeness, neutrality, and freedom from error.",
      "Useful AIS data is chosen for decisions, not collected only because it can be collected."
    ],
    quiz: {
      prompt: "Information that helps managers forecast future activity has:",
      choices: ["Predictive value", "No decision value", "A login requirement"],
      answer: 0
    }
  },
  {
    id: "lesson-2-tab-5",
    title: "Pathways and systems",
    kind: "text",
    paragraphs: [
      "AIS sits between accounting, technology, controls, data, and business processes. That means the pathway is wider than one job title. Students may encounter roles such as IT audit, business process analysis, database work, enterprise systems, internal audit, risk consulting, cybersecurity analysis, data analysis, systems consulting, and controllership with stronger technology judgment.",
      "Professional organizations and qualifications appear in this world too. ISACA matters for information systems audit, cybersecurity, governance, and risk. The AICPA matters for accounting, audit, and CPA-related work. The IIA matters for internal auditing. The video also names examples such as CISA, CITP, and CIA.",
      "An AIS includes people, procedures, data, software, hardware, controls, and reports. Enterprise systems connect business activities. ERP supports major internal business functions. SCM focuses on suppliers, materials, production, logistics, and delivery. CRM focuses on customers, sales activity, service, marketing, and interactions.",
      "A luxury watch company can use CRM to remember customer purchases, preferences, service history, and interest in rare releases. That customer knowledge helps the firm decide who may want a private invitation or a limited edition offer."
    ],
    points: [
      "SAP is one example of a major enterprise system provider.",
      "ERP, SCM, and CRM describe connected parts of business systems work.",
      "AIS career exploration should include job descriptions, skills, software, and certifications."
    ],
    quiz: {
      prompt: "Which acronym focuses on customer relationships and interactions?",
      choices: ["CRM", "SCM", "ASC"],
      answer: 0
    }
  },
  {
    id: "lesson-2-tab-6",
    title: "Brightspace submission",
    kind: "text",
    paragraphs: [
      "Submit your responses in Brightspace after you complete the Lesson 2 video and reading tabs. Use your own words and connect your answers to the examples in this lesson.",
      "Q1. How many times did you see a cat pop up during the video?",
      "Q2. What is the smallest example of a physical AIS you own?",
      "Q3. What is one example of a software AIS you have used or heard of?",
      "Q4. What is one example of a qualification that involves AIS?",
      "Q5. Why do companies offer SCM, CRM, and ERP systems instead of just one system that does everything?"
    ]
  },
  {
    id: "lesson-2-tab-7",
    title: "Continuing the Learning Journey",
    kind: "text",
    paragraphs: [
      "Please go to Connect and read Chapters 1 and 2."
    ],
    points: [
      "Please read the textbook, the slides and complete any Connect exercises due.",    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

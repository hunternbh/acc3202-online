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
    id: "lesson-6-tab-1",
    title: "XBRL Video Lesson",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 6 opening video",
    copy: "Explore the world of digital financial reporting with XBRL. (Video link coming soon)",
    points: [
      "XBRL stands for Extensible Business Reporting Language.",
      "It transforms financial statements from static documents into searchable data."
    ]
  },
  {
    id: "lesson-6-tab-2",
    title: "What is XBRL?",
    kind: "text",
    paragraphs: [
      "XBRL is an open international standard for digital business reporting. It is not just a format; it is a way to define and exchange financial information. Instead of treating financial reports as blocks of text or simple spreadsheets, XBRL uses 'tags' to identify each piece of data.",
      "For example, a number like '5,000,000' in a traditional report might just be a number. In XBRL, it is tagged as 'Net Income', for 'Company X', for the 'Year 2023', in 'USD'. This makes the data machine-readable and instantly comparable across thousands of companies."
    ],
    points: [
      "Machine-Readable: Data can be processed automatically by computers.",
      "Standardization: Provides a consistent way to report financial facts.",
      "Global Adoption: Used by regulators like the SEC in the US and many others worldwide."
    ],
    quiz: {
      prompt: "What is the primary benefit of making financial reports machine-readable with XBRL?",
      choices: ["It makes the reports look more colorful", "It allows for instant data comparison and analysis", "It increases the number of pages in the report"],
      answer: 1
    }
  },
  {
    id: "lesson-6-tab-3",
    title: "The Power of Tagging",
    kind: "text",
    paragraphs: [
      "Tagging is the process of applying XBRL identifiers to financial data. When a company 'tags' its financial statements, it is essentially applying a digital label to every line item. This metadata provides context that traditional PDF or HTML reports lack.",
      "Auditors and analysts use these tags to pull specific data points without having to manually hunt through hundreds of pages. If you want to know the 'Research and Development' expense for every company in the S&P 500, XBRL tagging makes that possible in seconds."
    ],
    points: [
      "Metadata: Data that provides information about other data.",
      "Efficiency: Reduces manual data entry and errors for analysts.",
      "Transparency: Makes it easier for investors to find and verify information."
    ],
    quiz: {
      prompt: "In the context of XBRL, what does 'tagging' refer to?",
      choices: ["Applying digital labels to financial data", "Marking physical assets with barcodes", "Hiding sensitive data from regulators"],
      answer: 0
    }
  },
  {
    id: "lesson-6-tab-4",
    title: "Taxonomies & Extensions",
    kind: "text",
    paragraphs: [
      "A taxonomy in XBRL is like a dictionary. It defines the specific tags that can be used for reporting. Different industries or countries may have different taxonomies (e.g., US GAAP taxonomy vs. IFRS taxonomy).",
      "Sometimes a company has a unique item that doesn't fit into the standard taxonomy. In these cases, they can create an 'extension' tag. However, extensions should be used sparingly because they can make it harder for analysts to compare that specific data point with other companies."
    ],
    points: [
      "Taxonomy: A standardized list of tags and their definitions.",
      "US GAAP Taxonomy: Used by public companies in the United States.",
      "Extension: A custom tag created by a company for unique items."
    ],
    quiz: {
      prompt: "What is an XBRL 'extension'?",
      choices: ["A way to delay filing financial reports", "A custom tag for a unique financial item", "An extra fee paid to the SEC"],
      answer: 1
    }
  },
  {
    id: "lesson-6-tab-5",
    title: "Student Reminders",
    kind: "text",
    paragraphs: [
      "The transition to digital reporting is a major shift in the accounting profession. Understanding XBRL is no longer optional for modern accountants.",
      "Keep working on your SQL projects and stay on top of the Connect assignments."
    ],
    points: [
      "Connect Homework: Due 14 July, Sunday, 2359.",
      "SQL Individual Project 1: Due 12 August, 2359."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

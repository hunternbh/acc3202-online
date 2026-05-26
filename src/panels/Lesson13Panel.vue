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
    id: "lesson-13-tab-1",
    title: "Excel Essentials Video",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 13 opening video",
    copy: "Mastering the foundation of data analysis with Excel and data cleaning. (Video link coming soon)",
    points: [
      "Excel remains the most widely used tool for data analysis in accounting.",
      "Clean data is the prerequisite for any meaningful insight or report."
    ]
  },
  {
    id: "lesson-13-tab-2",
    title: "Why 'Old School' Excel Still Works",
    kind: "text",
    paragraphs: [
      "While AI and SQL are powerful, Excel remains the 'Swiss Army Knife' of the accounting world. Its ubiquity means that almost every client, vendor, and colleague will have access to it. It is perfect for 'quick and dirty' analysis, building flexible models, and presenting data in a format everyone understands.",
      "Moreover, Excel provides a level of transparency and control that some automated systems lack. When you build a formula in Excel, you can see exactly how the numbers are being calculated. This 'hands-on' approach is invaluable for learning the logic behind financial transactions and reports."
    ],
    points: [
      "Ubiquity: Everyone has it and knows how to use the basics.",
      "Flexibility: Easy to build and change models on the fly.",
      "Transparency: Formulas allow you to trace the logic of every calculation."
    ],
    quiz: {
      prompt: "Why is Excel still considered an essential tool for accountants despite newer technologies?",
      choices: ["It is the only tool that can handle large datasets", "It is ubiquitous, flexible, and provides transparent logic for modeling", "It is easier to use than a calculator"],
      answer: 1
    }
  },
  {
    id: "lesson-13-tab-3",
    title: "The Art of Data Cleaning",
    kind: "text",
    paragraphs: [
      "In the real world, data is messy. It has duplicates, missing values, inconsistent formatting, and 'hidden' characters. Data cleaning is the process of fixing these issues so the data can be accurately analyzed. As the saying goes: 'Garbage In, Garbage Out'.",
      "Essential Excel tools for data cleaning include 'Remove Duplicates', 'Find and Replace', and text functions like TRIM (removes extra spaces) and PROPER (capitalizes only the first letter of each word). Mastering these techniques will save you hours of frustration and prevent costly errors in your reports."
    ],
    points: [
      "TRIM: Removes leading, trailing, and extra spaces from text.",
      "PROPER: Converts text to title case (e.g., 'jane doe' becomes 'Jane Doe').",
      "Remove Duplicates: Instantly identifies and deletes redundant rows.",
      "VLOOKUP/XLOOKUP: Essential for merging data from different lists."
    ],
    quiz: {
      prompt: "Which Excel function would you use to remove extra spaces from the beginning and end of a cell?",
      choices: ["CLEAN()", "TRIM()", "FIX()"],
      answer: 1
    }
  },
  {
    id: "lesson-13-tab-4",
    title: "Formulas and Function Logic",
    kind: "text",
    paragraphs: [
      "Excel's power comes from its vast library of functions. For accountants, the most important are logical functions (IF, AND, OR), lookup functions (XLOOKUP), and math/statistical functions (SUMIFS, COUNTIFS).",
      "Learning to 'nest' these functions—putting one function inside another—allows you to build incredibly complex and powerful models. For example, using an IF statement inside a SUMIFS function can help you create a dynamic report that automatically updates based on the criteria you select."
    ],
    points: [
      "IF: Performs a logical test and returns one value if true and another if false.",
      "SUMIFS: Adds cells that meet multiple criteria.",
      "XLOOKUP: The modern way to search for data in a table or range.",
      "Pivot Tables: The ultimate tool for summarizing and analyzing large datasets."
    ],
    quiz: {
      prompt: "Which Excel tool is best for quickly summarizing thousands of rows of transaction data into a readable report?",
      choices: ["Sorting and Filtering", "Pivot Tables", "Conditional Formatting"],
      answer: 1
    }
  },
  {
    id: "lesson-13-tab-5",
    title: "Student Reminders",
    kind: "text",
    paragraphs: [
      "Excel skills are often the deciding factor in hiring for entry-level accounting roles. Practice these techniques until they become second nature.",
      "Final project deadline: August 12. Don't leave it until the last minute!"
    ],
    points: [
      "SQL Individual Project 1: Due 12 August, 2359.",
      "Vibe Coding Individual Project 2: Due 12 August, 2359."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

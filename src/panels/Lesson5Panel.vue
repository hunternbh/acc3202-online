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
    id: "lesson-5-tab-1",
    title: "SQL Video Lesson",
    kind: "video",
    embedUrl: "",
    videoTitle: "Lesson 5 opening video",
    copy: "Watch the introduction to SQL foundations. (Video link coming soon)",
    points: [
      "SQL is the standard language for relational databases.",
      "Accountants use SQL to audit data and generate custom reports."
    ]
  },
  {
    id: "lesson-5-tab-2",
    title: "The Core Commands: SELECT & FROM",
    kind: "text",
    paragraphs: [
      "Every SQL query starts with the basic building blocks: SELECT and FROM. SELECT tells the database which columns (fields) you want to see, and FROM tells it which table those columns live in.",
      "If you want to see everything in a table, you use the asterisk (*) as a wildcard. For example, 'SELECT * FROM Invoices' pulls every single column and row from the Invoices table. In a professional setting, however, it is better to specify exactly what you need to save processing power."
    ],
    points: [
      "SELECT: Defines the columns you want to retrieve.",
      "FROM: Identifies the source table.",
      "Asterisk (*): A wildcard character that selects all columns."
    ],
    quiz: {
      prompt: "What does the '*' represent in a SQL SELECT statement?",
      choices: ["Select only the first column", "Select all columns in the table", "Delete all records"],
      answer: 1
    }
  },
  {
    id: "lesson-5-tab-3",
    title: "Filtering Data with WHERE",
    kind: "text",
    paragraphs: [
      "The WHERE clause is used to filter records. It allows you to extract only those records that fulfill a specified condition. This is essential for auditors who may only want to look at transactions above a certain dollar amount or for a specific date range.",
      "You can combine multiple conditions using AND, OR, and NOT. For example, 'SELECT * FROM Transactions WHERE Amount > 5000 AND Status = 'Pending'' would help identify large, uncompleted orders for review."
    ],
    points: [
      "WHERE: Filters rows based on specific criteria.",
      "Operators: Use =, <>, >, <, >=, <= for comparisons.",
      "Logical Operators: Combine conditions with AND or OR."
    ],
    quiz: {
      prompt: "Which SQL clause is used to filter the results of a query?",
      choices: ["WHERE", "FILTER", "GROUP BY"],
      answer: 0
    }
  },
  {
    id: "lesson-5-tab-4",
    title: "Joining Tables Together",
    kind: "text",
    paragraphs: [
      "Because relational databases store data in separate tables to avoid redundancy, we often need to 'JOIN' them back together to get a complete picture. A JOIN clause is used to combine rows from two or more tables, based on a related column between them.",
      "The most common type is the INNER JOIN, which returns records that have matching values in both tables. For example, joining a 'Customers' table with an 'Orders' table using the 'CustomerID' allows you to see exactly which customer placed which order."
    ],
    points: [
      "JOIN: Combines rows from multiple tables.",
      "Primary/Foreign Keys: The shared columns used to link tables.",
      "INNER JOIN: The standard join type for matching records."
    ],
    quiz: {
      prompt: "To link a 'Sales' table with a 'Products' table, which SQL command would you typically use?",
      choices: ["CONNECT", "JOIN", "LINK"],
      answer: 1
    }
  },
  {
    id: "lesson-5-tab-5",
    title: "Student Reminders",
    kind: "text",
    paragraphs: [
      "Please keep track of your upcoming deadlines. These projects and assignments are designed to reinforce your technical skills in SQL and accounting systems.",
      "Note: SQL Individual Project 1 is a significant part of your grade, so start early and ask questions if you get stuck."
    ],
    points: [
      "Connect Homework: Due 14 July, Sunday, 2359.",
      "SQL Individual Project 1: Released! Due 12 August, 2359."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

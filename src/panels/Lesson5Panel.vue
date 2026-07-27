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
    title: "Projects Review",
    kind: "text",
    paragraphs: [
      "This lesson reviews the remaining projects, assignments, quizzes, and final exam for the course.",
      "Please review each tab carefully and check Brightspace for the submission files, grading rubrics, and any updated instructions.",
      "The Ticketing Bot internal-controls activity will be completed in class together with Quiz 2.",
      "The bonus Kaggle Irrigation Data Analytics project is already available. It is a bonus assignment and does not replace any required course component."
    ],
    points: [
      "Individual Project 1: SQL Commands",
      "Individual Project 2: Vibe Coding — Hunter’s Gym",
      "Individual Project 3: Learning with AGILE",
      "Excel Project",
      "Quiz 2 and Ticketing Bot",
      "Data Analytics Final Exam",
      "Bonus Kaggle Irrigation Data Analytics Project"
    ]
  },
  {
    id: "lesson-5-tab-2",
    title: "Grading Components and Course Progress",
    kind: "text",
    imageUrl: "./assets/grading.png",
    imageAlt: "Grade distribution standards and course grading components",
    paragraphs: [
      "The image above summarizes the grade distribution standards and the graded components for the course.",
      "By this point, we should have completed both sets of Connect Homework, the online Brightspace lessons and submissions, the AIS midterm exam, Quiz 1, and the EYARC assignments.",
      "The remaining major items include Quiz 2, the Data Analytics final exam, the three individual projects, the Excel Project, and the Ticketing Bot activity.",
      "The bonus Kaggle Irrigation Data Analytics project is already available for students who would like to earn bonus credit.",
      "Check Brightspace for the most current instructions, submission links, and due dates."
    ]
  },
  {
    id: "lesson-5-tab-3",
    title: "Individual Project 1: SQL Commands",
    kind: "text",
    paragraphs: [
      "Individual Project 1 introduces SQL commands using an accounting database.",
      "Before starting, use the unique seed provided in your assignment Word document to generate your personalized questions.",
      "Open https://hunternbh.github.io/acc3202-sql/. The page runs SQLite in your browser through sql.js.",
      "Download sf_accounting.db from the page. The main tables are sf_parties, sf_accounts, and sf_ledger.",
      "Complete the questions and submit a Word document containing your SQL commands and explanations to Brightspace by August 12, 2026.",
      "Hint: You may use AI to help you understand errors or develop SQL commands. However, explain what each command does in your own words so that you learn from the exercise."
    ],
    points: [
      "Use your unique seed before beginning",
      "Database: sf_accounting.db",
      "Tables: sf_parties, sf_accounts, and sf_ledger",
      "Submit your SQL commands and explanations in a Word document",
      "Due date: August 12, 2026"
    ]
  },
  {
    id: "lesson-5-tab-4",
    title: "Individual Project 2: Vibe Coding — Hunter’s Gym",
    kind: "text",
    paragraphs: [
      "You are an intern at Hunter’s Gym. Your task is to create backend logic that registers members, assigns unused gym fobs, and checks whether memberships are active.",
      "Go to https://hunternbh.github.io/acc3202-hunter-gym/ and complete the three Python dictionary questions.",
      "Submit one Word document containing your fob design, programming answers, a screenshot showing that you passed the checker, and your written explanations.",
      "The explanation of how the fob system works and how dictionaries can be applied to accounting must be written in your own words.",
      "Submit the Word document to Brightspace by August 12, 2026 at 23:59 ET. Late submissions will not be accepted.",
      "Hint: Make sure your fob picture is coherent. The logo, gym name, colours, layout, and purpose should fit together, and the final image should clearly look like a usable gym membership fob."
    ],
    points: [
      "Complete the three questions on the assignment website",
      "Design a coherent gym membership fob",
      "Include a screenshot showing that you passed the checker",
      "Explain the system and its accounting application in your own words",
      "Due date: August 12, 2026 at 23:59 ET"
    ]
  },
  {
    id: "lesson-5-tab-5",
    title: "Individual Project 3: Learning with AGILE",
    kind: "text",
    paragraphs: [
      "You are part of an indie studio designing a PC accounting game prototype.",
      "Part One asks you to explain the benefits and costs of AGILE after watching https://www.youtube.com/watch?v=8eVXTyIZ1Hs.",
      "Part Two asks you to reflect on dealing with difficult teammates after watching https://www.youtube.com/watch?v=Ia_NnFaUKU4.",
      "Part Three requires you to analyze accounting_games_dataset.xlsx and propose a genre and design for your accounting game.",
      "Submit one Word document answering all three parts. Include at least two charts, diagrams, or figures based on the dataset.",
      "Submit the completed Word document to Brightspace by August 12, 2026 at 23:59 ET.",
      "Hint: You may use Excel PivotTables or an online Python compiler to analyze the data. You may also ask AI to look for hidden trends, but verify the results yourself and use actual statistics and figures from the dataset to support your proposal."
    ],
    points: [
      "Explain the benefits and costs of AGILE",
      "Reflect on handling difficult teammates",
      "Analyze accounting_games_dataset.xlsx",
      "Include at least two data-based charts or figures",
      "Propose a PC accounting game supported by evidence",
      "Due date: August 12, 2026 at 23:59 ET"
    ]
  },
  {
    id: "lesson-5-tab-6",
    title: "Excel Project",
    kind: "text",
    paragraphs: [
      "The Excel Project introduces the development, structure, presentation, functions, and business uses of spreadsheets.",
      "Print the assignment document and complete the written questions by hand using a pen or pencil.",
      "Question 1 asks you to draw a timeline showing how spreadsheets developed and how they may evolve in the age of AI.",
      "Question 2 asks you to compare Lotus 1-2-3 with modern Microsoft Excel.",
      "Question 3 asks you to describe a useful spreadsheet that you have personally encountered.",
      "Question 4 places you in an insurance firm and asks you to transfer information between Excel sheets without breaking the existing formulas.",
      "Scan your handwritten pages and submit them together with the completed Excel workbook for Question 4.",
      "Hint: Make a backup copy of the workbook before editing Question 4. After transferring the numbers, check the formulas and totals carefully to confirm that nothing has been overwritten or broken."
    ],
    points: [
      "Print the assignment and answer Questions 1–3 by hand",
      "Complete the insurance-firm Excel exercise in Question 4",
      "Scan and submit the handwritten pages",
      "Submit the completed Excel workbook separately",
      "Check Brightspace for the submission deadline"
    ]
  },
  {
    id: "lesson-5-tab-7",
    title: "Quiz 2 and Ticketing Bot",
    kind: "text",
    paragraphs: [
      "Quiz 2 will be similar in format to Quiz 1.",
      "The quiz will test the Data Analytics portion of the course. Review the concepts, software, exercises, and assignments covered during the Data Analytics lessons.",
      "You must attend class because the Ticketing Bot internal-controls activity will also be completed during the same class session.",
      "Students who are absent may not be able to complete the physical Ticketing Bot activity.",
      "Hint: Use Quiz 1 to understand the general format, but study the Data Analytics content rather than the earlier AIS material."
    ],
    points: [
      "Format will be similar to Quiz 1",
      "Content will focus on Data Analytics",
      "Review class exercises and assigned materials",
      "Attendance is required for the Ticketing Bot activity"
    ]
  },
  {
    id: "lesson-5-tab-8",
    title: "Data Analytics Final Exam",
    kind: "text",
    paragraphs: [
      "The Data Analytics final exam will be held in class on Wednesday, August 12, 2026.",
      "The examination period will be two hours.",
      "The exam will contain 100 multiple-choice questions.",
      "Review all Data Analytics topics, including the concepts, software applications, exercises, projects, and assigned readings covered during the course.",
      "Hint: With 100 questions in two hours, you will have an average of approximately 72 seconds per question. Answer the questions you know first and return to more difficult questions afterward."
    ],
    points: [
      "Date: Wednesday, August 12, 2026",
      "Location: In class",
      "Duration: Two hours",
      "Format: 100 multiple-choice questions",
      "Content: Data Analytics"
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>
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
      "This lesson reviews the remaining projects and assignments for the course.",
      "Please make sure that you complete all three individual projects: Individual Project 1 on SQL commands, Individual Project 2 on vibe coding, and Individual Project 3 on learning with AGILE.",
      "You must also complete the Excel Assignment and the EYARC Assignments.",
      "The Ticketing Bot internal-controls activity will be completed together with Quiz 2.",
      "The bonus Kaggle Irrigation Data Analytics project is already available. Because it is a bonus assignment, it should not be treated as a replacement for any required course component."
    ],
    points: [
      "Individual Project 1: SQL Commands",
      "Individual Project 2: Vibe Coding — Hunter’s Gym",
      "Individual Project 3: Learning with AGILE",
      "Excel Assignment",
      "EYARC Assignments",
      "Ticketing Bot Internal-Controls Activity",
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
      "The image above summarizes the grade distribution standards and all graded components for the course.",
      "By this point, we should have completed both sets of Connect Homework, the online Brightspace lessons and submissions, the AIS midterm exam, and Quiz 1.",
      "Quiz 2 will be held next Monday. The Data Analytics final exam will also take place next week.",
      "Please review your progress and make sure that you complete all three individual projects, the Excel Assignment, and the EYARC Assignments.",
      "The Ticketing Bot internal-controls activity will be completed together with Quiz 2.",
      "The bonus Kaggle Irrigation Data Analytics project is already available for students who would like to earn bonus credit.",
      "Check Brightspace for the most current instructions, submission links, and due dates."
    ]
  },
  {
    id: "lesson-5-tab-3",
    title: "Individual Project 1: SQL Commands",
    kind: "text",
    paragraphs: [
      "Individual Project 1 introduces you to SQL commands using an accounting database.",
      "Before beginning the questions, use the seed provided in your assignment Word document to generate your personalized questions. Every student has been assigned a unique seed number, so your questions may be different from those assigned to other students.",
      "Open the browser-based SQL page at https://hunternbh.github.io/acc3202-sql/. The page runs SQLite directly in your browser using sql.js.",
      "Download the sf_accounting.db database using the download link provided on the assignment page.",
      "The database contains three main tables: sf_parties, sf_accounts, and sf_ledger. The sf_ledger table contains the journal-entry lines.",
      "SQLite syntax is similar to PostgreSQL syntax. However, there are some minor differences, including date functions such as strftime, Boolean values represented as 0 and 1, and the use of LIMIT and OFFSET.",
      "Complete the personalized questions and place the SQL commands you used into the assignment Word document.",
      "Submit the completed Word document to the appropriate Brightspace submission bin by August 12, 2026."
    ],
    points: [
      "Assignment page: https://hunternbh.github.io/acc3202-sql/",
      "Browser database engine: SQLite through sql.js",
      "Database file: sf_accounting.db",
      "Tables: sf_parties, sf_accounts, and sf_ledger",
      "Generate your questions using your unique seed before starting",
      "Include your SQL commands in the Word document",
      "Due date: August 12, 2026"
    ]
  },
  {
    id: "lesson-5-tab-4",
    title: "Individual Project 2: Vibe Coding — Hunter’s Gym",
    kind: "text",
    paragraphs: [
      "You are a new intern at Hunter’s Gym, a newly opened gym on 23rd Street in New York City near Baruch College. The owner, Hunter, wants a simple system that can register members, assign gym fobs, and track membership periods.",
      "Hunter has ordered 10,000 fobs numbered from 1 to 10,000. When a customer signs up, the customer chooses a membership plan, such as one month, three months, or twelve months, and pays the membership fee. The customer is then assigned an unused fob.",
      "Whenever a member enters the gym, the member scans the fob. The system uses the fob ID to determine who the member is and whether the membership is currently active.",
      "You will implement the backend logic using Python dictionaries, which are key–value data structures. The assignment website will guide you through the questions and allow you to run tests to check your work.",
      "First, prepare a Word document that will contain all parts of your submission.",
      "Create a design for the gym fob using AI, Adobe tools, or other design software. A sample design is available on the assignment website. Insert the fob image into your Word document and write a few sentences explaining how you created it, what inspired the design, and why you selected its features.",
      "Next, go to https://hunternbh.github.io/acc3202-hunter-gym/ and complete the three programming questions. Paste your answers into the Word document and include a screenshot showing that your answers passed the website’s checker.",
      "Without using AI, write a short explanation in your own words describing how the gym membership fob system works.",
      "Without using AI, explain how Python dictionaries or similar key–value structures can be applied in accounting.",
      "For each programming question, include a short write-up explaining how you approached and solved it. If you are unable to solve a question completely, document your best attempt.",
      "You are expected to use the tools available to you to solve the programming questions. However, the two personal reflection sections must be written in your own words without AI assistance.",
      "Submit the completed Word document to the appropriate Brightspace submission bin. Late submissions will not be accepted."
    ],
    points: [
      "Assignment site: https://hunternbh.github.io/acc3202-hunter-gym/",
      "Prepare and submit one .docx file",
      "Include your name and student ID",
      "Design and explain a gym membership fob",
      "Complete all three programming questions",
      "Include a screenshot showing that you passed the checker",
      "Explain the fob system in your own words without AI",
      "Explain an accounting application of dictionaries without AI",
      "Due date: August 12, 2026 at 23:59 ET",
      "No late submissions will be accepted"
    ]
  },
  {
    id: "lesson-5-tab-5",
    title: "Individual Project 3: Learning with AGILE",
    kind: "text",
    paragraphs: [
      "For this project, you are part of a new independent game studio tasked with designing a prototype for a PC accounting game. The project contains three parts: learning AGILE, dealing with difficult people, and analyzing an accounting-games dataset.",
      "Part One: Learning AGILE",
      "AGILE is a flexible and iterative approach to project management and product development. Instead of planning the entire project in advance and delivering everything at the end, as in a waterfall approach, AGILE divides the work into short cycles called sprints.",
      "AGILE emphasizes continuous feedback, adaptation, teamwork, and the early delivery of useful features. Watch the introductory AGILE video at https://www.youtube.com/watch?v=8eVXTyIZ1Hs.",
      "Think about why software companies use AGILE, what benefits it provides, and what costs or difficulties may arise from using it.",
      "Part Two: Dealing with Difficult People",
      "Many students leave college without having learned how to work effectively with difficult people. Even people who have worked for many years may still struggle with disagreements, expectations, communication, and conflict.",
      "Apple co-founder Steve Jobs was one of many young Americans who explored Eastern spirituality during the 1970s. Looking beyond familiar Western self-help principles can sometimes provide a different perspective on handling relationships, conflict, and personal well-being.",
      "Watch the video by Sadhguru at https://www.youtube.com/watch?v=Ia_NnFaUKU4.",
      "Think about your previous group-project experiences. Different people naturally have different expectations, working styles, priorities, and ways of solving problems. Disagreement can be useful when people remain calm, debate ideas constructively, and work toward a better solution.",
      "Problems arise when people believe that everything must happen according to their own preferences. Difficult people and difficult situations cannot always be avoided, but you can choose how you respond to them.",
      "Consider what you can do to remain pleasant, productive, and responsible even when a teammate behaves in a way that you dislike.",
      "Part Three: Data Analysis",
      "Open accounting_games_dataset.xlsx. Use Excel, Python, R, Power BI, Tableau, another analytical program, or a combination of tools to analyze the data.",
      "Use your findings to prepare a short proposal describing the type of PC accounting game your independent studio should design.",
      "You may assume any reasonable budget or project constraints. Your proposal must use statistics, trends, charts, or other evidence from the dataset to support your recommendation.",
      "Submit one Word document that answers all three project questions.",
      "Question 1: In your own words and without using an AI-generated explanation, concisely explain why companies, particularly software companies, use AGILE. Discuss both its benefits and its costs. The visual design of the submission may be AI-assisted.",
      "Question 2: Explain what you learned from the Sadhguru video and describe what you would do differently in the future when dealing with difficult teammates.",
      "Question 3: Include at least two diagrams, figures, or charts based on accounting_games_dataset.xlsx. More than two are encouraged when they add useful evidence. Analyze the trends and propose the genre and design of the PC accounting game your studio should create.",
      "Submit the completed Word document to the appropriate Brightspace submission bin by August 12, 2026 at 23:59 ET."
    ],
    points: [
      "Part One: Learn and evaluate AGILE",
      "Part Two: Reflect on dealing with difficult people",
      "Part Three: Analyze accounting_games_dataset.xlsx",
      "Submit one .docx file",
      "Answer all three project questions",
      "Use your own words for the required reflections",
      "Include at least two data-based figures or charts",
      "Support the game proposal with evidence from the dataset",
      "Due date: August 12, 2026 at 23:59 ET"
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

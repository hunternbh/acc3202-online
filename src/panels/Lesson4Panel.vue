<script setup>
import PanelView from "../components/PanelView.vue";

defineProps({
  panelTitle: {
    type: String,
    required: true
  }
});

// Edit this array to control Lesson 4 tabs, text, video labels, and MCQs.
const tabs = [
  {
    id: "lesson-4-tab-1",
    title: "Opening Video",
    kind: "video",
    embedUrl: "https://www.youtube.com/embed/VCBdGKBXz4Y",
    videoTitle: "Lesson 4 opening video",
    copy: "Begin Lesson 4 by watching the video. Please commit to 30 to 40 minutes of uninterrupted watching and learning. Put away your phones, food, and other distractions.",
    points: [
      "Uninterrupted Attention: Say aloud: 'I will commit to 30 minutes of uninterrupted video learning.'",
      "Eliminate Distractions: Put away phones, food, and any other devices. Focus completely for this short duration.",
      "Tested Content: Remember that everything discussed since Lesson 1 will be tested in this course."
    ],
    quiz: {
      prompt: "The instructor asks you to eliminate which of the following distractions during the 30-minute video?",
      choices: ["PowerPoint slides only", "Your food and mobile phone", "The Zoom link"],
      answer: 1
    }
  },
  {
    id: "lesson-4-tab-2",
    title: "Database Schema & Primary Keys",
    kind: "text",
    paragraphs: [
      "A database schema is a blueprint of how data is organized: it defines what tables exist, what fields they contain, and how they relate. Each table represents a distinct entity in the database. The schema serves as an instruction manual for the database.",
      "In the Customers table, the Customer Number acts as the Primary Key (PK). A PK uniquely identifies every single row (instance) in a table. It cannot be NULL, should not change over time, is controlled by the organization, and is ideally a sequential number to help detect gaps.",
      "We cannot use customer names (like Jane Doe) as a primary key because names frequently repeat. For example, a passport scanning system at TSA would fail or confuse passengers if it relied only on names. We need unique, stable identifiers like sequential IDs, Social Security Numbers (SSN), or cryptocurrency wallet strings."
    ],
    points: [
      "Schema: The structural blueprint or instruction manual of a database.",
      "Primary Key: A column that uniquely identifies every record in a table and cannot be NULL.",
      "Name redundancy: Why names (e.g., Emily, Toni, Jane Doe) fail as unique identifiers."
    ],
    quiz: {
      prompt: "Which of the following is a key characteristic of a Primary Key (PK)?",
      choices: ["It can be NULL if the customer is not registered", "It must uniquely identify each row and should not change over time", "It should always match the customer's first name"],
      answer: 1
    }
  },
  {
    id: "lesson-4-tab-3",
    title: "Foreign Keys & Linking Tables",
    kind: "text",
    paragraphs: [
      "A Foreign Key (FK) is a primary key from one table that is placed into another table to establish a link between them. This allows us to join tables. In a Pet Shop or Pet Hotel database, we have a Customers table and a Pets table. If one customer has one pet, we can simply place the Pet ID as an FK in the Customer table.",
      "However, what if a customer has multiple pets? If we try to squeeze them into one row, we create database redundancy. To solve this, we create a 'linking table' (e.g., Customer-Pets) that contains the Customer ID and Pet ID together, along with specific pet details like allergies.",
      "For orders, we use an Order Items linking table with a composite primary key consisting of both the Order Number and Product Number. Linking tables prevent data repetition, ensure database integrity, and allow clean tracking of many-to-many relationships."
    ],
    points: [
      "Foreign Key: A PK from another table used to link two tables together.",
      "Linking Table: Used to handle complex relationships and prevent data redundancy.",
      "Composite Key: A primary key made of multiple columns (e.g., Order Number + Product Number)."
    ],
    quiz: {
      prompt: "Why do we use a linking table in a database?",
      choices: ["To make the database load slower", "To prevent redundancy and clean up many-to-many relationships", "To hide the primary keys from users"],
      answer: 1
    }
  },
  {
    id: "lesson-4-tab-4",
    title: "UML Relationships & DBA",
    kind: "text",
    paragraphs: [
      "In UML, data relationships can be represented as inheritance, aggregation, or composition. Composition means a child entity cannot exist outside its parent (for example, book chapters only exist inside a book). In a computer, every relationship must be precisely defined down to the smallest detail.",
      "Consider a car and a state: a car can only be registered in one and only one state (e.g., NY or NJ, not both). But a state can license one or more cars, and the database rule may enforce that a state must have at least one car. In the past, notations were not standardized, using brackets, commas, or crow's foot notation. Today, we standardize using multiplicity numbers like 0..* (zero or many) or 1..1 (one and only one).",
      "Managing and governing these rules is the job of a Database Administrator (DBA). At Baruch, DBAs manage systems like Brightspace. If a teacher deletes a file, a well-designed database keeps it for a 30-day grace period, allowing the DBA to recover it. DBAs ensure security, govern data integrity, and troubleshoot technical requests."
    ],
    points: [
      "Composition: A relationship where the child cannot exist without the parent.",
      "Multiplicity: Standardized numbers (like 1..1 and 0..*) defining how many entities can associate.",
      "DBA Career: A role focused on database governance, maintenance, and recovery systems."
    ],
    quiz: {
      prompt: "If a database rule states a car can only be registered in New York or New Jersey but not both, which multiplicity applies to the State in the Car entity?",
      choices: ["Zero or many (0..*)", "One and only one (1..1)", "At least two (2..*)"],
      answer: 1
    }
  },
  {
    id: "lesson-4-tab-5",
    title: "Relational, Hierarchical, & Network Models",
    kind: "text",
    paragraphs: [
      "Historically, databases were designed using three primary models: Hierarchical, Network, and Relational. Relational is the modern standard, but understanding the past helps us appreciate it.",
      "The Hierarchical model organizes data in a parent-child tree structure (e.g., University -> College -> Department -> Course). Each child can have only one parent. The main failure of this model is that it cannot easily support direct vertical leaps or horizontal links—such as promoting a junior directly to a partner, or linking a course directly to the university head.",
      "The Network model solves this by allowing a child to have multiple parents, creating a web of connections. However, this creates an extremely messy and complex design that is hard for the linear human mind to organize. The Relational model excels by representing data in clean, connected two-dimensional tables (relations) with keys."
    ],
    points: [
      "Hierarchical Model: Tree structure where each child has exactly one parent.",
      "Network Model: Multi-parent web structure that is highly complex and messy to design.",
      "Relational Model: The modern standard organizing data into clean tables with primary and foreign keys."
    ],
    quiz: {
      prompt: "What is the main drawback of the Network database model?",
      choices: ["It does not support multiple parents", "It is extremely messy and complex for humans to design", "It does not allow any connections between nodes"],
      answer: 1
    }
  },
  {
    id: "lesson-4-tab-6",
    title: "UML Modeling Practice",
    kind: "text",
    paragraphs: [
      "Now it is your turn to practice UML modeling! We will use draw.io, the simplest and most powerful free diagramming tool available.",
      "To access the tool, open your browser and go to draw.io (which redirects to app.diagrams.net). Once loaded, select 'Create New Diagram', choose 'Blank Diagram', and click 'Create'. You can choose to save it to your local device or link it to Google Drive.",
      "On the left-hand sidebar, search for 'UML' shapes or click '+ More Shapes' at the bottom of the sidebar, check the 'UML' box, and click 'Apply'. This will give you standard UML class boxes and relationship arrows to drag and drop.",
      "Practice Scenario: Draw a simple UML Class Diagram for a Pet Hotel Boarding System. Create two classes: 'Customer' (with CustomerID as PK, Name, and Phone) and 'Pet' (with PetID as PK, Name, Breed, and Allergies). Establish a connection line between them showing the multiplicity rules: (1) A Customer can own zero or many Pets (0..*), but (2) A Pet must belong to one and only one Customer (1..1)."
    ],
    points: [
      "Visit draw.io (app.diagrams.net) to start a blank diagram.",
      "Enable UML shapes in the left sidebar to drag Class boxes and lines.",
      "Scenario: Model 'Customer' and 'Pet' with attributes.",
      "Enforce multiplicity: Customer to Pet is 0..*, Pet to Customer is 1..1."
    ],
    quiz: {
      prompt: "When drawing the connection line from Pet to Customer in this scenario, what multiplicity should be written at the Customer end of the line?",
      choices: ["Zero or many (0..*)", "One and only one (1..1)", "At least two (2..*)"],
      answer: 1
    }
  },
  {
    id: "lesson-4-tab-7",
    title: "UML Multiplicity Exercise",
    kind: "text",
    imageUrl: "./assets/uml-exercise.png",
    imageAlt: "UML Multiplicity Exercise Diagram",
    paragraphs: [
      "Examine the UML diagram below carefully. It illustrates different classes and their relationships, with missing multiplicity boundaries labeled as Q3a and Q3b.",
      "Based on the database rules and business constraints of this scenario, determine the minimum and maximum boundaries for each relationship. Draw or write down your answers before moving to the next tab to check them!"
    ],
    points: [
      "Analyze the relationship lines between classes in the diagram.",
      "Q3a: Identify the minimum and maximum limits for the entity.",
      "Q3b: Identify the minimum and maximum limits for Professor and Assistant roles.",
      "Try to solve this on your own first!"
    ],
    quiz: {
      prompt: "Are you ready to see the answers to the UML Multiplicity Exercise?",
      choices: ["No, I need more time", "Yes, show me the answers!"],
      answer: 1
    }
  },
  {
    id: "lesson-4-tab-8",
    title: "UML Exercise Answers",
    kind: "text",
    paragraphs: [
      "Here are the correct answers and explanations for the UML Multiplicity Exercise. Review how these boundaries define the exact business constraints inside a database."
    ],
    points: [
      "Q3a. min – 1, max – 5",
      "Q3b. Professor – min – 0, max – 1, Assistant – min – 3, max - 6"
    ],
    quiz: {
      prompt: "Based on the answers, what is the maximum number of Assistants that can be associated in Q3b?",
      choices: ["1", "3", "6"],
      answer: 2
    }
  },
  {
    id: "lesson-4-tab-9",
    title: "Brightspace Submission",
    kind: "text",
    paragraphs: [
      "Please submit a Word document to Brightspace answering the questions below. The submission will be graded on its accuracy. The prompts below draw from both the chapter reading and the opening video transcript.",
      "Q1. Why are names not used as PKs",
      "Q2. What does a DBA do when a teacher accidentally deletes a file in Brightspace?",
      "Q3. How many times did you see a cat pop up during the video?",
      "Q4. Export your draw.io UML Class Diagram from the practice scenario (Customer-Pet model) as an image or PDF, and include it in your Brightspace submission document."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

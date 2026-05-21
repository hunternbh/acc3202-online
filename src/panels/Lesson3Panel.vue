<script setup>
import PanelView from "../components/PanelView.vue";

defineProps({
  panelTitle: {
    type: String,
    required: true
  }
});

// Edit this array to control Lesson 3 tabs, text, video labels, and MCQs.
const tabs = [
  {
    id: "lesson-3-tab-1",
    title: "Accountants as Business Analysts",
    kind: "video",
    embedUrl: "https://www.youtube.com/embed/EOsmTWCL0gA",
    videoTitle: "Lesson 3 opening video",
    copy: "Begin Lesson 3 by watching the video. Please commit to an uninterrupted lesson of 30 to 40 minutes, keep away all distractions, and declare your commitment.",
    points: [
      "Commitment: Say aloud: 'I will commit to 30 minutes of uninterrupted video watching.'",
      "Open up the PowerPoint on a separate screen if possible, or listen along.",
      "Understand why the accountant's role is not just recording information but acts as a business analyst."
    ],
    quiz: {
      prompt: "To begin the lesson, the instructor asks you to make a commitment to:",
      choices: ["A 10-minute break", "30 minutes of uninterrupted video watching", "Checking your emails"],
      answer: 1
    }
  },
  {
    id: "lesson-3-tab-2",
    title: "Business Processes & Burger Example",
    kind: "text",
    paragraphs: [
      "Businesses expand and get big, starting from simple business processes. To understand this, consider opening a burger restaurant. While it seems simple, it actually consists of multiple interconnected processes: ordering ingredients (purchasing), preparing the burger, and managing customer payments.",
      "For the purchasing process, a new business might buy buns, patties, lettuce, and sauces from a local grocery store. For burger preparation, a recipe and specific steps are needed: seasoning and cooking the patty, using an apparatus to smash it on the grill, flipping it, buttering the grill, searing the buns, and assembling it.",
      "Even customer payment involves complex systems. You must prepare loose change, buy a cash register, and secure a POS machine or payment solution. When businesses scale, they often purchase on credit and collect receipts for text/tax credits. The accountant's job is to integrate and analyze these processes to improve overall business efficiency."
    ],
    points: [
      "Three core processes: purchasing ingredients, preparing food, and collecting customer payment.",
      "Business complexity: purchasing on credit, tax credits, and payment systems.",
      "Integrating processes: synthesising operations from end to end to optimize performance."
    ],
    quiz: {
      prompt: "According to the restaurant example, which of the following is a preparation step that depends on the purchasing process?",
      choices: ["Opening a new location in Japan", "Procuring the buns, patty, lettuce, and sauces", "Using a Sephora cream box"],
      answer: 1
    }
  },
  {
    id: "lesson-3-tab-3",
    title: "BPMN & Flowcharts",
    kind: "text",
    paragraphs: [
      "How can businesses find and fix inefficiencies faster? Through Business Process Modeling (BPM) and its notation, BPMN (Business Process Modeling Notation). Think of BPMN as learning a new language. Rather than writing a heavy book of instructions, we use standardized symbols to represent processes visually, showing chronological order and parallel steps.",
      "Let's learn the fundamental symbols of BPMN: The circle always starts and ends the process. The rectangle with rounded edges represents events that happen (activities). The diamond or rhombus is a checkpoint where the flow branches out into multiple pathways.",
      "In BPMN, we also use a 'swimming pool' structure. The pool represents the organization or entity, while each lane represents a specific person or area of responsibility (e.g., Lane 1 and Lane 2). For drawing, you can use Google draw.io, which is a simple drag-and-drop tool, or use code-based solutions like Mermaid flowcharts."
    ],
    points: [
      "Circle: Starts and ends the process.",
      "Rectangle with rounded edges: Events/activities that happen.",
      "Diamond / Rhombus: Checkpoints or decision gateways that branch out.",
      "Swimming Pool / Lanes: Represents organizations (pools) and distinct responsibilities (lanes)."
    ],
    quiz: {
      prompt: "In BPMN, what does a diamond (rhombus) symbol represent?",
      choices: ["The start of a process only", "A database storage unit", "A checkpoint or decision gateway that branches out"],
      answer: 2
    }
  },
  {
    id: "lesson-3-tab-bpmn-practice",
    title: "BPMN Diagram Practice",
    kind: "text",
    paragraphs: [
      "Now it is your turn to practice business process modeling! We will use draw.io, the simplest and most powerful free diagramming tool available.",
      "To access the tool, open your browser and go to draw.io (which redirects to app.diagrams.net). Once loaded, select 'Create New Diagram', choose 'Blank Diagram', and click 'Create'. You can choose to save it to your local device or link it to Google Drive.",
      "On the left-hand sidebar, search for 'BPMN' shapes or click '+ More Shapes' at the bottom of the sidebar, check the 'BPMN' box, and click 'Apply'. This will give you standard BPMN process elements (events, activities, gateways) to drag and drop.",
      "Scenario: University Library Book Borrowing System",
      "Background: The university wants to automate the process of students borrowing books from the campus library. Right now, everything is done manually, and it often causes delays.",
      "Process Description:\n1. Start Event: A student requests to borrow a book.\n2. Task 1 – Search Availability: The system (or librarian) checks if the requested book is available in the catalog.\n   Gateway: Is the book available? Yes → Continue; No → End Event (“Book not available”)\n3. Task 2 – Check Borrower Status: Confirm that the student has no overdue books or unpaid fines.\n   Gateway: Is the student eligible? Yes → Continue; No → End Event (“Borrowing request denied”)\n4. Task 3 – Register Borrowing: The librarian issues the book and updates the system.\n5. Task 4 – Notify Student: Send an email/SMS confirmation with due date.\n6. Intermediate Timer Event: Wait until the due date.\n7. Task 5 – Return Book: Student returns the book.\n   Gateway: Was the book returned on time? Yes → End Event (“Book returned successfully”); No → Task 6 – Apply Fine → End Event (“Fine imposed”)"
    ],
    points: [
      "Visit draw.io (app.diagrams.net) to start a blank diagram.",
      "Enable BPMN shapes in the left sidebar to drag events, tasks, and gateways.",
      "Follow the 7-step process description chronologically.",
      "Use diamonds (gateways) to split the flow based on decisions and conditions."
    ]
  },
  {
    id: "lesson-3-tab-bpmn-answer",
    title: "BPMN Exercise Answer",
    kind: "text",
    imageUrl: "./assets/bpmn-exercises-answer.jpeg",
    imageAlt: "BPMN Exercise Answer Diagram",
    paragraphs: [
      "Examine the correct BPMN diagram below carefully. It illustrates the complete automated library book borrowing system process flow, showing all events, tasks, gateways, and intermediate timer events.",
      "Compare this workflow diagram against the model you created in draw.io. Pay close attention to how the decision pathways split at each gateway and how the intermediate timer event represents waiting until the due date."
    ],
    points: [
      "Compare your model against the official solution below.",
      "Ensure you have three gateways for: availability check, eligibility check, and timely return check.",
      "Verify the intermediate timer event symbol is used to represent the wait period."
    ]
  },
  {
    id: "lesson-3-tab-4",
    title: "Data Modeling & History",
    kind: "text",
    paragraphs: [
      "After understanding business processes, we must study data modeling: how data is actually stored and retrieved. In the past, data modeling was highly complex. Without modern tools like Visual Studio Code or AI, programmers had to memorize precise coding syntax. Conceptually, a chair is a chair, but its syntax varies across English, Spanish, French, Hebrew, Chinese, Japanese, or Hindi. Database administrators had their own quirks, which became confusing.",
      "To appreciate modern conveniences, think of the history of music. In the past, people used a Walkman and bought CDs or cassettes to store music data. Today, we stream music on demand via Spotify. Understanding this progression gives a deeper appreciation for how technology has evolved.",
      "A critical symbol in data modeling is the database or data storage symbol, which resembles a cream box from Sephora. It represents any computer system or digital unit where data is stored. Everyone in the field recognizes this symbol immediately."
    ],
    points: [
      "Syntax: The precise language or coding structure used by a system.",
      "Sephora cream box: The universal symbol for a database or data storage.",
      "Appreciating history: Understanding past systems (like the Walkman and CDs) highlights modern technological convenience."
    ],
    quiz: {
      prompt: "The universal database symbol is humorously compared to which of the following objects?",
      choices: ["A vinyl record", "A Sephora cream box", "A burger recipe"],
      answer: 1
    }
  },
  {
    id: "lesson-3-tab-5",
    title: "UML & Subscriptions",
    kind: "text",
    paragraphs: [
      "UML (Unified Modeling Language) is a standard notation to represent how data is structured and associated. It uses classes (boxes) and associations (lines) to define relationships. For example, consider the relationship between a Person and an Auto (car): a person can own zero or many cars (written as 0..* or *), but a car can only be owned by one and only one person (1..1 or 1).",
      "This logic extends to modern subscription models, like ChatGPT Plus, Netflix, or Spotify. An account is tied to one and only one person for security. If multiple people could freely share one account without restrictions, these subscription business models would collapse. Conversely, one person can subscribe to zero or many accounts depending on their resources.",
      "Precisely defining these relationships (one-to-one, one-to-many, many-to-many) is essential because computers are not inherently smart—they only process precise instructions using zeros and ones."
    ],
    points: [
      "Multiplicity: Denotes the number of allowed associations, such as 0, 1, or many (*).",
      "One and only one: Restricts an entity to a single relationship (e.g., one account per subscriber).",
      "Business integrity: Multiplicity rules protect subscription revenue and access controls."
    ],
    quiz: {
      prompt: "In the Person and Auto UML example, how many cars can a single person own?",
      choices: ["Exactly one", "Zero or many (*)", "None"],
      answer: 1
    }
  },
  {
    id: "lesson-3-tab-6",
    title: "Brightspace Submission",
    kind: "text",
    paragraphs: [
      "Please submit a Word document to Brightspace answering the questions below. The submission will be graded on its accuracy.",
      "Q1. How many times did you see a cat pop up during the video?",
      "Q2. How many different types of UML notation are in the slides that can show multiplicies?",
      "Q3. What are the different jobs that you have learnt here that are not auditing and accounting?",
      "Q4. What is a weakness of using BPMN?",
      "Q5. Why do companies offer SCM, CRM, and ERP systems instead of just one system that does everything?",
    ]
  },
  {
    id: "lesson-3-tab-7",
    title: "Continuing the Learning Journey",
    kind: "text",
    paragraphs: [
      "Please go to Connect and read Chapters 3 and 4."
    ],
    points: [
      "Please read the textbook, the slides and complete any Connect exercises due.",    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

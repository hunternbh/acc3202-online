const heroImage = "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1800&q=80";

function lesson(id, title, kind, copy, points, quiz, videoLabel) {
  return {
    id,
    title,
    kind,
    copy,
    points,
    quiz,
    videoLabel: videoLabel || "Short course video placeholder"
  };
}

function quiz(prompt, choices, answer) {
  return { prompt, choices, answer };
}

const legacyCourses = [
  {
    id: "financial-statement-analysis",
    category: "Accounting Foundations",
    title: "Financial Statement Analysis",
    summary: "Read income statements, balance sheets, and cash flow signals with a structured analyst mindset.",
    description: "A compact walkthrough of the statements students use most often in ACC3202, with short checks after each lesson.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80",
    imageAlt: "Calculator, notebook, and accounting reports on a desk",
    lessons: [
      lesson(
        "fsa-1",
        "Reading the three statements",
        "text",
        "Start by separating performance, position, and cash movement. Each statement answers a different accounting question, and the best analysis connects all three.",
        [
          "Income statements summarize revenue, expense, and profit over a period.",
          "Balance sheets show assets, liabilities, and equity at one date.",
          "Cash flow statements explain how cash moved through operating, investing, and financing activity."
        ],
        quiz("Which statement shows financial position at a single date?", ["Income statement", "Balance sheet", "Cash flow statement"], 1)
      ),
      lesson(
        "fsa-2",
        "Ratio signals",
        "video",
        "Ratios are useful when they answer a question. Liquidity, profitability, and leverage ratios each point to a different business concern.",
        [
          "Current ratio helps inspect short-term liquidity.",
          "Gross margin highlights pricing and cost pressure.",
          "Debt-to-equity provides a quick leverage signal."
        ],
        quiz("Which ratio family is most directly tied to short-term obligations?", ["Liquidity", "Profitability", "Market valuation"], 0),
        "Video placeholder: ratio analysis in 6 minutes"
      ),
      lesson(
        "fsa-3",
        "Analyst conclusion",
        "text",
        "A good conclusion states the signal, the evidence, and the uncertainty. Avoid treating one ratio as a complete diagnosis.",
        [
          "Compare against prior periods or peer benchmarks.",
          "Use at least two pieces of supporting evidence.",
          "Name the limitation before making a recommendation."
        ],
        quiz("A strong analysis should usually compare results against what?", ["Only the class average", "Prior periods or peers", "The largest number in the report"], 1)
      )
    ]
  },
  {
    id: "cost-volume-profit",
    category: "Accounting Foundations",
    title: "Cost Behavior and CVP",
    summary: "Practice fixed costs, variable costs, contribution margin, and break-even reasoning.",
    description: "This page introduces cost behavior and cost-volume-profit logic for quick revision before tutorials.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80",
    imageAlt: "Business team reviewing charts and notes",
    lessons: [
      lesson(
        "cvp-1",
        "Cost behavior",
        "text",
        "Costs respond differently when activity changes. Classifying the behavior helps managers forecast profit under different volume assumptions.",
        [
          "Variable costs change in total as activity changes.",
          "Fixed costs remain stable in total across a relevant range.",
          "Mixed costs contain both fixed and variable components."
        ],
        quiz("Which cost changes in total as units produced change?", ["Fixed cost", "Variable cost", "Sunk cost"], 1)
      ),
      lesson(
        "cvp-2",
        "Contribution margin",
        "video",
        "Contribution margin shows what remains after variable costs. It contributes first to fixed costs, then to operating profit.",
        [
          "Contribution margin equals sales minus variable costs.",
          "The contribution margin ratio supports quick break-even estimates.",
          "Higher contribution margin improves profit sensitivity to volume."
        ],
        quiz("Contribution margin first helps cover which cost type?", ["Fixed costs", "Opportunity costs", "Historical costs"], 0),
        "Video placeholder: contribution margin example"
      ),
      lesson(
        "cvp-3",
        "Break-even point",
        "text",
        "Break-even volume is the point where total contribution margin equals total fixed cost. Profit begins after that point.",
        [
          "Break-even units equal fixed costs divided by contribution margin per unit.",
          "Margin of safety compares expected sales against break-even sales.",
          "CVP assumes stable prices and costs within the relevant range."
        ],
        quiz("At break-even, operating profit is usually:", ["Positive", "Zero", "Always negative"], 1)
      )
    ]
  },
  {
    id: "budgeting-variance",
    category: "Planning and Control",
    title: "Budgeting and Variance Analysis",
    summary: "Turn budget targets into simple variance explanations and next-step management questions.",
    description: "A short course page for understanding how budgets guide control and how variances start better conversations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=80",
    imageAlt: "Financial documents with pen and calculator",
    lessons: [
      lesson(
        "bva-1",
        "Budget purpose",
        "text",
        "Budgets coordinate plans, communicate targets, and create a baseline for evaluating results. They are management tools, not just spreadsheets.",
        [
          "Operating budgets connect sales, production, and expenses.",
          "Cash budgets help monitor timing and liquidity.",
          "Budgets should support accountability without hiding uncertainty."
        ],
        quiz("A budget is best described as:", ["A planning and control tool", "A tax form", "A bank statement"], 0)
      ),
      lesson(
        "bva-2",
        "Variance basics",
        "video",
        "A variance is the difference between actual and budgeted performance. The useful next question is why the difference happened.",
        [
          "Favorable variances are not always good news.",
          "Unfavorable variances are not always caused by poor performance.",
          "Price and quantity effects should be separated when possible."
        ],
        quiz("The most useful follow-up to a variance is usually:", ["Who can be blamed?", "Why did it happen?", "Can it be ignored?"], 1),
        "Video placeholder: interpreting favorable and unfavorable variances"
      ),
      lesson(
        "bva-3",
        "Management response",
        "text",
        "Variance analysis should lead to action. The response might be operational, pricing-related, staffing-related, or simply a revised forecast.",
        [
          "Focus first on material variances.",
          "Separate controllable and uncontrollable causes.",
          "Link the response to the business decision."
        ],
        quiz("Which variance should usually receive priority?", ["The smallest one", "The most material one", "The oldest label"], 1)
      )
    ]
  },
  {
    id: "internal-controls",
    category: "Planning and Control",
    title: "Internal Controls and Audit Thinking",
    summary: "Map control objectives, common weaknesses, and evidence needed for assurance work.",
    description: "This course page keeps the control discussion simple: objective, risk, control, evidence, and conclusion.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80",
    imageAlt: "Professionals in a meeting room discussing documents",
    lessons: [
      lesson(
        "ict-1",
        "Control objectives",
        "text",
        "Internal controls are designed to reduce risk around reporting, operations, and compliance. Each control should connect to an objective.",
        [
          "Authorization protects against improper transactions.",
          "Segregation of duties reduces fraud and error risk.",
          "Documentation supports review and accountability."
        ],
        quiz("Segregation of duties mainly helps reduce:", ["Fraud and error risk", "Revenue only", "Marketing cost"], 0)
      ),
      lesson(
        "ict-2",
        "Testing controls",
        "video",
        "Audit thinking asks what evidence would show that a control was designed well and operating as intended.",
        [
          "Inspection reviews documents or system records.",
          "Observation checks how a process is performed.",
          "Reperformance independently verifies the control activity."
        ],
        quiz("Which evidence method independently verifies a control activity?", ["Reperformance", "Guessing", "Brand review"], 0),
        "Video placeholder: testing a purchase approval control"
      ),
      lesson(
        "ict-3",
        "Control gaps",
        "text",
        "A control gap is meaningful when it raises the likelihood or impact of a risk. The best recommendations are practical and specific.",
        [
          "Name the risk created by the gap.",
          "Explain the likely impact.",
          "Recommend a control that fits the process."
        ],
        quiz("A useful recommendation should be:", ["Specific and practical", "Vague and dramatic", "Unrelated to the process"], 0)
      )
    ]
  },
  {
    id: "accounting-data-analytics",
    category: "Analytics and Ethics",
    title: "Accounting Data Analytics",
    summary: "Use clean data, simple visual checks, and anomaly thinking in accounting workflows.",
    description: "A front-end course shell for introducing accounting analytics without requiring specialized software.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=80",
    imageAlt: "Analytics dashboard displayed on a laptop",
    lessons: [
      lesson(
        "ada-1",
        "Clean data first",
        "text",
        "Analytics work begins with data quality. Missing values, duplicates, date formats, and inconsistent account names can distort conclusions.",
        [
          "Check completeness before calculating totals.",
          "Standardize date and account formats.",
          "Document assumptions made during cleaning."
        ],
        quiz("What should usually happen before analysis?", ["Data quality checks", "Final conclusion", "Deleting all unusual items"], 0)
      ),
      lesson(
        "ada-2",
        "Visual inspection",
        "video",
        "Simple charts can reveal patterns, spikes, missing periods, or outliers. Visual checks help form better accounting questions.",
        [
          "Trend charts support period-to-period review.",
          "Bar charts compare accounts or departments.",
          "Scatter plots can reveal unusual relationships."
        ],
        quiz("Which chart is commonly used for period-to-period review?", ["Trend chart", "Pie chart only", "Seating chart"], 0),
        "Video placeholder: spotting outliers in transaction data"
      ),
      lesson(
        "ada-3",
        "Anomaly questions",
        "text",
        "An anomaly is not automatically an error or fraud. It is a signal that needs explanation and evidence.",
        [
          "Ask whether the item is unusual for amount, timing, or account.",
          "Compare the item against policy or normal behavior.",
          "Gather evidence before escalating a concern."
        ],
        quiz("An anomaly should first be treated as:", ["A signal to investigate", "Automatic fraud", "A reason to ignore the data"], 0)
      )
    ]
  },
  {
    id: "ethics-reporting",
    category: "Analytics and Ethics",
    title: "Ethics in Financial Reporting",
    summary: "Review pressure points, professional judgment, and transparent reporting choices.",
    description: "A short and spacious course page for discussing ethical accounting decisions and reporting pressure.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1100&q=80",
    imageAlt: "People shaking hands across a meeting table",
    lessons: [
      lesson(
        "efr-1",
        "Ethical pressure",
        "text",
        "Reporting pressure can come from targets, deadlines, incentives, or authority. Recognizing the pressure is the first step toward better judgment.",
        [
          "Identify who benefits from the reporting choice.",
          "Separate facts from assumptions.",
          "Escalate concerns through the right channel."
        ],
        quiz("The first step when facing reporting pressure is to:", ["Recognize the pressure", "Hide the evidence", "Ignore policy"], 0)
      ),
      lesson(
        "efr-2",
        "Professional judgment",
        "video",
        "Judgment is strongest when it is evidence-based, documented, and consistent with accounting standards and ethical obligations.",
        [
          "Use standards to frame the accounting issue.",
          "Document the reasoning behind estimates.",
          "Seek review when uncertainty is material."
        ],
        quiz("Good professional judgment should be supported by:", ["Evidence and documentation", "Personal preference only", "A rushed deadline"], 0),
        "Video placeholder: documenting an accounting judgment"
      ),
      lesson(
        "efr-3",
        "Transparent reporting",
        "text",
        "Transparent reporting helps users understand both the numbers and the uncertainty behind them. Disclosure can be as important as measurement.",
        [
          "Explain significant estimates clearly.",
          "Avoid burying key assumptions.",
          "Match disclosure detail to user needs."
        ],
        quiz("Transparent reporting helps users understand:", ["Numbers and uncertainty", "Only page design", "Only the logo"], 0)
      )
    ]
  }
];

const panelSpecs = [
  {
    id: "learning-joyfully",
    title: "Learning Joyfully",
    summary: "Start the ACC3202 sequence with curiosity, rhythm, and a systems mindset.",
    image: "./assets/carousel/panel-00-learning-joyfully.png",
    imageAlt: "Black and white manga scene of students learning accounting systems together"
  },
  {
    id: "what-is-ais",
    title: "What is AIS?",
    summary: "See how transactions, controls, data, and reports connect inside AIS.",
    image: "./assets/carousel/panel-01-what-is-ais.png",
    imageAlt: "Black and white manga view of an accounting information system workflow"
  },
  {
    id: "accountants-business-analysts",
    title: "Accountants as Business Analysts",
    summary: "Connect accounting judgment to business processes, questions, and evidence.",
    image: "./assets/carousel/panel-02-business-analysts.png",
    imageAlt: "Black and white manga accountant presenting business analysis"
  },
  {
    id: "data-modelling",
    title: "Data Modelling",
    summary: "Map entities, relationships, and business meaning before building data.",
    image: "./assets/carousel/panel-03-data-modelling.png",
    imageAlt: "Black and white manga student drawing a data model"
  },
  {
    id: "relational-dbs-sql",
    title: "Relational DBs & SQL",
    summary: "Move from tables and keys to query logic for accounting questions.",
    image: "./assets/carousel/panel-04-relational-dbs-sql.png",
    imageAlt: "Black and white manga analyst working with relational database tables"
  },
  {
    id: "xbrl-tagging",
    title: "XBRL and Tagging",
    summary: "Follow structured reporting from financial statements into tagged data.",
    image: "./assets/carousel/panel-05-xbrl-tagging.png",
    imageAlt: "Black and white manga illustration of financial reporting tags"
  },
  {
    id: "ais-cobit-coso",
    title: "AIS and COBIT, COSO",
    summary: "Frame systems work through governance, risk, controls, and assurance.",
    image: "./assets/carousel/panel-06-ais-controls.png",
    imageAlt: "Black and white manga illustration of governance and controls around AIS"
  },
  {
    id: "encryption-decryption",
    title: "Encryption and Decryption",
    summary: "Trace how information stays protected while authorized users work with it.",
    image: "./assets/carousel/panel-07-encryption.png",
    imageAlt: "Black and white manga secure data flow with locks and keys"
  },
  {
    id: "ai-i",
    title: "AI I",
    summary: "Begin using AI ideas to inspect accounting data and system patterns.",
    image: "./assets/carousel/panel-08-ai-i.png",
    imageAlt: "Black and white manga accountant collaborating with an AI interface"
  },
  {
    id: "ai-ii",
    title: "AI II",
    summary: "Bring human oversight to AI outputs, anomalies, and accounting decisions.",
    image: "./assets/carousel/panel-09-ai-ii.png",
    imageAlt: "Black and white manga accountant reviewing AI analytics carefully"
  },
  {
    id: "basics-i",
    title: "Basics I",
    summary: "Build the AIS foundations from documents, data entry, ledgers, and reports.",
    image: "./assets/carousel/panel-10-basics-i.png",
    imageAlt: "Black and white manga beginner assembling AIS foundations"
  },
  {
    id: "basics-ii",
    title: "Basics II",
    summary: "Link cycles, controls, records, and decisions into one working picture.",
    image: "./assets/carousel/panel-11-basics-ii.png",
    imageAlt: "Black and white manga view of connected AIS process flows"
  }
];

function panelLessons(panel) {
  return [
    lesson(
      `${panel.id}-1`,
      "Orientation",
      "text",
      `${panel.title} opens one part of the ACC3202 AIS and data analytics journey. Use the panel to name the main accounting question before moving into examples.`,
      [
        "Connect the topic to information, process, control, or analysis.",
        "Notice what an accountant needs to understand before making a decision.",
        "Keep a short note of the evidence or data involved."
      ],
      quiz("ACC3202 focuses this panel on which course family?", ["AIS and data analytics", "Organic chemistry", "Studio painting"], 0)
    ),
    lesson(
      `${panel.id}-2`,
      "Walkthrough",
      "video",
      `${panel.summary} The short walkthrough space can hold the lecture clip, worked example, or screencast for this panel.`,
      [
        "Watch for the process step that creates useful information.",
        "Separate the system tool from the accounting purpose.",
        "Pause when a control, query, tag, model, or AI output changes the conclusion."
      ],
      quiz("A good systems walkthrough should connect the tool to what?", ["Its accounting purpose", "Only its screen color", "A random shortcut"], 0),
      `Video placeholder: ${panel.title}`
    ),
    lesson(
      `${panel.id}-3`,
      "Apply",
      "text",
      `Finish ${panel.title} by explaining the idea in your own words and connecting it to the next panel in the course.`,
      [
        "State one concept you can reuse later.",
        "Name one data or control implication.",
        "Carry one question forward into the next panel."
      ],
      quiz("The apply step is strongest when you:", ["Connect concept and evidence", "Memorize a label only", "Skip the next panel"], 0)
    )
  ];
}

const courses = panelSpecs.map((panel, index) => ({
  id: panel.id,
  category: `Panel ${index}`,
  title: panel.title,
  summary: panel.summary,
  description: `${panel.summary} This course panel keeps the material compact so you can move through the ACC3202 sequence joyfully.`,
  image: panel.image,
  imageAlt: panel.imageAlt,
  lessons: panelLessons(panel)
}));

const app = Vue.createApp({
  data() {
    return {
      heroImage,
      courses,
      activeLessonIndex: 0,
      answers: {},
      route: this.readRoute()
    };
  },
  computed: {
    currentCourse() {
      if (this.route.name !== "course") return null;
      return this.courses.find((course) => course.id === this.route.courseId) || null;
    },
    activeLesson() {
      if (!this.currentCourse) return null;
      return this.currentCourse.lessons[this.activeLessonIndex] || this.currentCourse.lessons[0];
    }
  },
  mounted() {
    window.addEventListener("hashchange", this.onHashChange);
  },
  beforeUnmount() {
    window.removeEventListener("hashchange", this.onHashChange);
  },
  methods: {
    readRoute() {
      const hash = window.location.hash.replace(/^#\/?/, "");
      const parts = hash.split("/").filter(Boolean);
      if (parts[0] === "course" && parts[1]) {
        return { name: "course", courseId: parts[1] };
      }
      return { name: "home" };
    },
    onHashChange() {
      this.route = this.readRoute();
      this.activeLessonIndex = 0;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollCarousel(direction) {
      const strip = this.$refs.courseStrip;
      if (!strip) return;
      strip.scrollBy({ left: direction * 340, behavior: "smooth" });
    },
    scrollToCatalog() {
      if (this.route.name !== "home") {
        window.location.hash = "#/";
        window.setTimeout(() => this.scrollToCatalog(), 60);
        return;
      }
      const target = document.getElementById("catalog");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    answerKey(lessonItem) {
      return `${this.currentCourse.id}:${lessonItem.id}`;
    },
    isCorrect(lessonItem) {
      return Number(this.answers[this.answerKey(lessonItem)]) === lessonItem.quiz.answer;
    }
  }
});

app.mount("#app");

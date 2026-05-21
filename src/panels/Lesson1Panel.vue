<script setup>
import PanelView from "../components/PanelView.vue";

defineProps({
  panelTitle: {
    type: String,
    required: true
  }
});

// Edit this array to control Lesson 1 tabs, text, video labels, and MCQs.
const tabs = [
  {
    id: "lesson-1-tab-1",
    title: "Learning Joyfully and Committing Yourself to This Class",
    kind: "video",
    embedUrl: "https://youtube.com/embed/zqnUAns80EI",
    videoTitle: "Lesson 1 opening video",
    copy: "In this video, Hunter shares about what it means to be in control of your mind, body, emotions and energy.",
    points: [
      "Administrative Details: Syllabus, grading, attendance, etc.",
      "Should you take this class? Yes! This class is for anyone who wants to learn how to learn.",
      "How the class is structured."
    ],
    quiz: {
      prompt: "Are you in a state of receptivity to learning?",
      choices: ["Not now", "No", "Yes"],
      answer: 2
    }
  },
  {
    id: "lesson-1-tab-2",
    title: "Learning joyfully",
    kind: "text",
    paragraphs: [
      "Right from your childhood, you have probably heard the same advice again and again.",
      "If you study, how should you study? Study hard. If you work, how should you work? Work hard. If something is difficult, what should you do? Try harder.",
      "And so, very quietly, you begin to believe that learning must feel heavy. You begin to think that if you are not suffering, maybe you are not serious. If you are not exhausted, maybe you are not trying. The people before you were often taught this way too. They made their own lives very difficult, and then, without meaning to, they taught you to make your life difficult as well.",
      "But is that really learning?",
      "It once happened that a man had an old car that would not start. Instead of fixing the engine, he brought out a little kitten, tied it to the car, and told it to pull. People looked at him and said, \"Are you crazy? How can this kitten move a car?\" And the man said, \"Do not worry. I have a whip.\"",
      "Nobody told you that you should learn joyfully. Nobody told you that you should work with love. Nobody told you that your mind opens more easily when you are curious, interested, and alive to what you are doing.",
      "You make your own life very difficult. You are definitely also going to make the lives of people around you very difficult.",
      "How do we work joyfully then? How can I force myself to work joyfully if I hate studying Accounting Information Systems?"
    ],
    quiz: {
      prompt: "The passage challenges the idea that good learning must always feel:",
      choices: ["Heavy and painful", "Curious and alive", "Joyful and interested"],
      answer: 0
    }
  },
  {
    id: "lesson-1-tab-3",
    title: "Your mind is a wishing tree",
    kind: "text",
    paragraphs: [
      "It once happened that a man took a long walk. Without knowing it, he wandered into a beautiful place. He was tired, so he thought, \"I wish I had somewhere to rest.\" There was a soft patch of grass under a tree, so he lay down and slept.",
      "After some time, he woke up well rested. Then he thought, \"I am hungry. I wish I had something to eat.\" Immediately, food appeared. He ate.",
      "Then he thought, \"I am thirsty. I wish I had something to drink.\" Immediately, drinks appeared. He drank.",
      "But then his mind began to move in every direction. He thought, \"What is happening here? Maybe there are ghosts.\" Immediately, ghosts appeared. Then he thought, \"They are going to torture me.\" Immediately, they tortured him. Then he thought, \"They are going to kill me.\" And that was the end of him.",
      "The problem was not the tree. The problem was that he was sitting under a wishing tree. Whatever he asked for came to him. Food came. Drink came. Fear came. Trouble came.",
      "Now do not go looking for such a tree in the forest. We can barely find a tree today. What the story says is that your mind is not under your control.",
      "If your mind is scattered, it creates scattered results. If your mind is fearful, it creates fearful results. If your mind is always saying, \"I hate this, I cannot do this, this is impossible, this is boring, this is not for me,\" then you are also planting these thoughts inside your own learning.",
      "Then what will happen?",
      "You sit in front of this book, and before the chapter even begins, you have already decided that it is painful. You open Excel, and before the formula even appears, you have already decided that you are bad at it. You look at SQL, Tableau, Python, or AI, and before you try, you have already told yourself, \"AI will do all this for me.\"",
      "Then you ask, \"Why am I not learning?\"",
      "But every few moments, you are changing direction. One moment you want to understand. The next moment you are afraid. One moment you want to improve. The next moment you are comparing yourself to someone else. One moment you want to try. The next moment you say, \"I cannot.\"",
      "If you take two steps north, two steps south, two steps east, and two steps west, do not be surprised that you have not reached anywhere.",
      "To learn joyfully, your mind has to become a little more organized. Your body, your attention, your emotion, and your effort must move in one direction. This does not mean you must become perfect. It does not mean you must never be distracted. It only means that when you sit down to learn, you should give yourself honestly to learning.",
      "Today, I will learn one thing properly.",
      "That is enough.",
      "If you fall down ten times, then there are ten lessons. If your formula fails, you learn from the error. If your query does not run, you learn from the message. If your dashboard looks wrong, you ask what the data is doing. If your first answer is weak, you revise it.",
      "For a committed learner, there is no such thing as failure."
    ],
    quiz: {
      prompt: "For a committed learner, an error can become:",
      choices: ["A lesson", "A reason to stop", "Proof that learning is impossible"],
      answer: 0
    }
  },
  {
    id: "lesson-1-tab-4",
    title: "Brightspace Submission",
    kind: "text",
    paragraphs: [
      "Please submit a Word document to Brightspace answering the questions below. The submission will be graded on its accuracy",
      "Q1. What does the singer sing in the first sentence of the outro of the video? Give three words.",
      "Q2. How many percent of the grade is this Word document submission?",
      "Q3. Are you prepared to commit to sitting down uninterrupted for the pre-recorded lectures and Zoom lectures before we meet physically in class?",
      "Q4. If you are facing any problems that are affecting your ability to focus in this class, I suggest you drop this class to settle those problems. This class will be intense because we are covering many technical portions to learn AIS and DA, as well as new parts to keep up with AI developments. If you consent to this intensity, please reply \"yes.\"",
      "Q5. If you have any other questions, please email me. If you understood this, please reply \"yes.\"",
      "Q6. How many times did you see a cat pop up during the video?",
      "Q7. After these questions, if you are still committed to learning joyfully and striving in this class, I will make sure to share with you as much as I can and help you learn. I will make your time worthwhile. Please reply \"yes\" joyfully =). Otherwise, please drop this class."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

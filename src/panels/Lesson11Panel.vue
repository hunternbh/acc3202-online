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
    id: "lesson-11-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This lesson panel (Prompt Engineering and Chatbots) is currently under construction.",
      "Please check back later to discover modern generative AI applications and security safeguards."
    ],
    points: [
      "Topics include crafting effective prompts, and spotting deepfakes.",
      "Interactive chatbot prompt playgrounds will be added soon."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

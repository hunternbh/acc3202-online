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
    id: "lesson-10-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This lesson panel (File Structure and AI Foundations) is currently under construction.",
      "Please check back later for data storage basics and core AI architectures."
    ],
    points: [
      "Topics include flat files vs. databases, and early artificial intelligence history.",
      "Conceptual overviews and learning checklists will be published here."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

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
    id: "lesson-12-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This lesson panel (GPUs and Becoming AI) is currently under construction.",
      "Please check back later for hardware systems and human-AI collaboration frameworks."
    ],
    points: [
      "Topics include GPU processing capabilities and high-performance computing.",
      "Future career paths in the age of AI will be explored here."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

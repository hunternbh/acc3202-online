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
    id: "lesson-14-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This final lesson panel (Review & Final Reminders) is currently under construction.",
      "Please check back later for comprehensive course review materials and final project instructions."
    ],
    points: [
      "Topics include midterm review concepts, and deadline check-ins.",
      "Preparation guides and grade calculators will be provided."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

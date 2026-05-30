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
    id: "lesson-13-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This lesson panel (Excel Basics and Data Cleaning) is currently under construction.",
      "Please check back later for essential spreadsheets skills and data preparation."
    ],
    points: [
      "Topics include fundamental Excel formulas, and standardizing raw datasets.",
      "Downloadable exercise workbooks will be uploaded soon."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

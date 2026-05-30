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
    id: "lesson-6-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This lesson panel (XBRL and Tagging) is currently under construction.",
      "Please check back later for detailed explanations of digital financial reporting standards."
    ],
    points: [
      "Topics include XBRL taxonomies, extensions, and the power of data tagging.",
      "Practice exercises for analyzing SEC filings will be available soon."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

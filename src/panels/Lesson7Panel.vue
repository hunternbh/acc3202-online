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
    id: "lesson-7-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This lesson panel (AIS and Internal Controls) is currently under construction.",
      "Please check back later to learn about protecting organizational assets."
    ],
    points: [
      "Topics include preventive vs. detective controls, and segregation of duties.",
      "Real-world case studies on system audits will be featured here."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

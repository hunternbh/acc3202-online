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
    id: "lesson-8-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This lesson panel (COSO, COBIT, NIST) is currently under construction.",
      "Please check back later for material on industry control frameworks."
    ],
    points: [
      "Topics include organizational risk management and cybersecurity standards.",
      "Framework reference materials and self-assessments will be added soon."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

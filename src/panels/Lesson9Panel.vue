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
    id: "lesson-9-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This lesson panel (Encryption and Decryption) is currently under construction.",
      "Please check back later for cybersecurity and cryptography insights."
    ],
    points: [
      "Topics include symmetric vs. asymmetric encryption, and securing transit data.",
      "Interactive encryption tools and guides will be released here soon."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

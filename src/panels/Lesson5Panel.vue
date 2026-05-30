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
    id: "lesson-5-under-construction",
    title: "Under construction",
    kind: "text",
    paragraphs: [
      "This lesson panel (SQL Foundations) is currently under construction.",
      "Please check back later for SQL foundations and interactive database exercises!"
    ],
    points: [
      "Topics include SELECT, FROM, WHERE, and JOINs.",
      "Hands-on exercises and real-world accounting queries will be released soon."
    ]
  }
];
</script>

<template>
  <PanelView :panel-title="panelTitle" :tabs="tabs" />
</template>

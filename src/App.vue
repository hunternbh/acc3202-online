<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import HomeView from "./components/HomeView.vue";
import { heroImage, panels } from "./data/panels";
import Lesson1Panel from "./panels/Lesson1Panel.vue";
import Lesson2Panel from "./panels/Lesson2Panel.vue";
import Lesson3Panel from "./panels/Lesson3Panel.vue";
import Lesson4Panel from "./panels/Lesson4Panel.vue";

function readRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [segment, panelId] = hash.split("/").filter(Boolean);

  if (segment === "panel" && panelId) {
    return { name: "panel", panelId };
  }

  return { name: "home" };
}

const route = ref(readRoute());
const currentPanel = computed(() => panels.find((panel) => panel.id === route.value.panelId) ?? null);
const panelViews = {
  "lesson-1": Lesson1Panel,
  "lesson-2": Lesson2Panel,
  "lesson-3": Lesson3Panel,
  "lesson-4": Lesson4Panel
};
const currentPanelView = computed(() => panelViews[route.value.panelId] ?? null);

function onHashChange() {
  route.value = readRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => window.addEventListener("hashchange", onHashChange));
onBeforeUnmount(() => window.removeEventListener("hashchange", onHashChange));
</script>

<template>
  <header class="topbar" :class="{ 'panel-topbar': currentPanel }">
    <template v-if="!currentPanel">
      <a class="brand" href="#/" aria-label="ACC3202 Hunter Ng MOOC home">
        <span class="brand-icon" aria-hidden="true">A</span>
        <span>ACC3202 Hunter Ng MOOC</span>
      </a>

      <nav class="main-nav" aria-label="Primary">
        <a href="#/" class="active">Panels</a>
      </nav>
    </template>

    <template v-else>
      <a class="panel-home-link" href="#/">Main</a>
      <h1 class="panel-nav-title">{{ currentPanel.title }}</h1>
    </template>
  </header>

  <main>
    <HomeView v-if="route.name === 'home'" :hero-image="heroImage" :panels="panels" />
    <component :is="currentPanelView" v-else-if="currentPanel && currentPanelView" :panel-title="currentPanel.title" />

    <section v-else class="not-found">
      <h1>Panel not found</h1>
      <p>The panel link does not match Lesson 1 to Lesson 4.</p>
      <a href="#/">Return to main</a>
    </section>
  </main>

  <footer class="app-footer">
    <p>Copyright &copy; Hunter Ng 2026</p>
  </footer>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  panelTitle: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true
  }
});

const activeTabIndex = ref(0);
const answers = ref({});
const activeTab = computed(() => props.tabs[activeTabIndex.value] ?? props.tabs[0]);

watch(
  () => props.tabs,
  () => {
    activeTabIndex.value = 0;
  }
);

function answerKey(tab) {
  return `${props.panelTitle}:${tab.id}`;
}

function isCorrect(tab) {
  if (!tab.quiz) return false;
  return Number(answers.value[answerKey(tab)]) === tab.quiz.answer;
}
</script>

<template>
  <section class="course-page">
    <section class="learning-shell">
      <nav class="lesson-tabs" aria-label="Lesson tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          type="button"
          :class="{ active: activeTabIndex === index }"
          @click="activeTabIndex = index"
        >
          {{ index + 1 }}
        </button>
      </nav>

      <article class="lesson-panel">
        <p class="lesson-kicker">{{ panelTitle }} | Tab {{ activeTabIndex + 1 }}</p>
        <h2>{{ activeTab.title }}</h2>

        <div v-if="activeTab.embedUrl" class="video-embed-shell">
          <iframe
            class="video-embed"
            :src="activeTab.embedUrl"
            :title="activeTab.videoTitle || activeTab.title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div
          v-else-if="activeTab.kind === 'video'"
          class="video-placeholder"
          role="img"
          :aria-label="activeTab.videoLabel"
        >
          <span aria-hidden="true"></span>
          <p>{{ activeTab.videoLabel }}</p>
        </div>

        <div v-if="activeTab.imageUrl" class="lesson-image-shell">
          <img
            :src="activeTab.imageUrl"
            :alt="activeTab.imageAlt || activeTab.title"
            class="lesson-image"
            style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0; display: block; border: 1px solid var(--border, #ccc);"
          />
        </div>

        <div v-if="activeTab.paragraphs?.length" class="lesson-copy-blocks">
          <p v-for="paragraph in activeTab.paragraphs" :key="paragraph" class="lesson-copy">
            {{ paragraph }}
          </p>
        </div>
        <p v-else-if="activeTab.copy" class="lesson-copy">{{ activeTab.copy }}</p>
        <ul v-if="activeTab.points?.length" class="lesson-points">
          <li v-for="point in activeTab.points" :key="point">{{ point }}</li>
        </ul>

        <section v-if="activeTab.quiz" class="quiz-box" aria-label="Multiple choice question">
          <h3>Quick check</h3>
          <p>{{ activeTab.quiz.prompt }}</p>
          <div class="choices">
            <label v-for="(choice, choiceIndex) in activeTab.quiz.choices" :key="choice">
              <input
                v-model="answers[answerKey(activeTab)]"
                type="radio"
                :name="`quiz-${activeTab.id}`"
                :value="choiceIndex"
              />
              <span>{{ choice }}</span>
            </label>
          </div>
          <p
            v-if="answers[answerKey(activeTab)] !== undefined"
            class="answer-feedback"
            :class="{ correct: isCorrect(activeTab), missed: !isCorrect(activeTab) }"
          >
            {{ isCorrect(activeTab) ? "Correct. Nice work." : "Not quite. Review the lesson note above." }}
          </p>
        </section>
      </article>
    </section>
  </section>
</template>

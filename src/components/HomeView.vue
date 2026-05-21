<script setup>
import { ref } from "vue";

defineProps({
  heroImage: {
    type: String,
    required: true
  },
  panels: {
    type: Array,
    required: true
  }
});

const courseStrip = ref(null);

function scrollCarousel(direction) {
  courseStrip.value?.scrollBy({ left: direction * 340, behavior: "smooth" });
}
</script>

<template>
  <section class="home-page">
    <section
      class="home-hero"
      :style="{ backgroundImage: `linear-gradient(rgba(13, 30, 44, 0.56), rgba(13, 30, 44, 0.68)), url(${heroImage})` }"
    >
      <div class="hero-content">
        <p class="eyebrow">Hunter Ng</p>
        <h1>ACC3202</h1>
        <p class="hero-subtitle">Learning AIS and DA joyfully.</p>

        <section class="carousel-area" aria-label="Lesson panels">
          <div class="carousel-toolbar">
            <h2>Lesson Panels</h2>
            <div class="carousel-controls">
              <button type="button" class="round-button" @click="scrollCarousel(-1)" aria-label="Previous panels">
                <span aria-hidden="true">&lsaquo;</span>
              </button>
              <button type="button" class="round-button" @click="scrollCarousel(1)" aria-label="Next panels">
                <span aria-hidden="true">&rsaquo;</span>
              </button>
            </div>
          </div>

          <div ref="courseStrip" class="course-strip">
            <article v-for="panel in panels" :key="panel.id" class="course-card">
              <a :href="`#/panel/${panel.id}`" class="course-card-link">
                <img :src="panel.image" :alt="panel.imageAlt" />
                <div class="course-card-body">
                  <p class="course-school">{{ panel.category }}</p>
                  <h3>{{ panel.title }}</h3>
                  <p>{{ panel.summary }}</p>
                  <span class="card-cta">Open panel</span>
                </div>
              </a>
            </article>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
  defineProps<{ src?: string }>();
</script>

<template>
  <span class="ui-image">
    <NuxtImg v-slot="{ isLoaded, src, imgAttrs }" :src="src" custom>
      <img v-if="isLoaded" :src="src" v-bind="imgAttrs" />
      <div v-else class="skeleton-animation"></div>
    </NuxtImg>
  </span>
</template>

<style>
  .ui-image {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .skeleton-animation {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(90deg, #acacac, #b7b7b7, #ababab);
    background-size: 200% 100%;
    animation: moveRight 1.5s infinite;
  }

  @keyframes moveRight {
    0% {
      background-position: -200% 0;
    }
    50% {
      background-position: -100% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
</style>

<script setup lang="ts">
  import { defineProps } from "vue";
  import type { NuxtError } from "#app";

  defineProps<{ error: NuxtError }>();
</script>

<template>
  <div class="error">
    <!-- Иконка -->
    <div class="error__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="error__icon-svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        />
      </svg>
    </div>

    <h1 class="error__title">
      {{ error.statusCode ?? "Ошибка" }}
    </h1>

    <p v-if="error.message" class="error__message">
      {{ error.message }}
    </p>

    <NuxtLink to="/" class="error__button"> На главную </NuxtLink>
  </div>
</template>

<style lang="scss">
  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    text-align: center;
    padding: 24px;
  }

  .error__icon {
    color: #dc2626; /* красный */
    margin-bottom: 16px;
  }

  .error__icon-svg {
    width: 64px;
    height: 64px;
  }

  .error__title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .error__message {
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
  }

  .error__button {
    padding: 10px 20px;
    border-radius: 6px;
    background: #dc2626;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
  }

  .error__button:hover {
    background: #b91c1c;
  }
</style>

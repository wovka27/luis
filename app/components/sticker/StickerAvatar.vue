<script setup lang="ts">
  interface IProps {
    src: string;
    displacement: "horizontal" | "vertical";
  }

  defineProps<IProps>();
</script>

<template>
  <div class="sticker-avatar" :class="displacement">
    <UiImage :src="src" width="64" height="64" alt="cat" />
  </div>
</template>

<style lang="scss">
  .sticker-avatar {
    width: 64px;
    height: 64px;

    img {
      border-radius: 16px;
      border: 3px solid var(--color-sticker-bg);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:not(:first-child) {
      &.horizontal {
        margin-left: -20px;
      }
      &.vertical {
        margin-top: -20px;
      }
    }
  }
</style>

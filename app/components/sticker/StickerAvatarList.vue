<script setup lang="ts">
  interface IProps {
    list: string[];
    orientation: "horizontal" | "vertical";
  }

  defineProps<IProps>();
</script>

<template>
  <div class="sticker-avatar-list" :class="orientation">
    <StickerAvatar v-for="(item, idx) in list" :key="item + idx" :src="item" :displacement="orientation" />
  </div>
</template>

<style lang="scss">
  .sticker-avatar-list {
    display: flex;

    &.horizontal {
      flex-direction: row;
    }

    &.vertical {
      flex-direction: column;
    }
  }
</style>

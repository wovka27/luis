<script setup lang="ts">
  interface IProps {
    avatars: string[];
  }

  defineProps<IProps>();
</script>

<template>
  <div class="sticker-content">
    <h3 class="sticker-content__title">Консультация эксперта</h3>
    <StickerAvatarList :list="avatars" orientation="horizontal" />
    <a
      class="sticker-content__button"
      href="https://cataas.com/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square"
      target="_blank"
      >Получить консультацию</a
    >
  </div>
</template>

<style lang="scss">
  .sticker-content {
    padding: 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 280px;
    gap: 24px;
    height: 100%;
    border-radius: 8px 0 0 8px;
    background: inherit;

    &__title {
      font-size: 23px;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 0;
      margin: 0;
      color: var(--color-sticker-text);
    }

    &__button {
      margin-bottom: 20px;
      border: none;
      padding: 20px 24px;
      cursor: pointer;
      transition: background 0.2s ease-in-out;
      border-radius: 6px;
      box-shadow: 0 4px 20px 0 rgba(115, 115, 115, 0.1);
      background: #fff;
      color: var(--color-sticker-text);
      font-size: 16px;
      font-weight: 500;
      line-height: 100%;

      &:hover {
        background: #dcdcdc;
      }
    }
  }
</style>

<script setup lang="ts">
  const cats = useCats();
</script>

<template>
  <transition name="swipe">
    <aside ref="elementRef" v-if="cats?.length" class="sticker">
      <div class="sticker-inner">
        <div>
          <StickerContent :avatars="cats" />
        </div>
      </div>
      <StickerTab :avatars="cats" />
    </aside>
  </transition>
</template>

<style lang="scss">
  .sticker {
    overflow: hidden;
    --border-r: var(--border-radius-14);
    position: fixed;
    min-width: 0;
    height: 266px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-radius: var(--border-r) 0 0 var(--border-r);
    transition-duration: var(--transition-duration);
    transition-property: all;
    display: flex;
    align-items: center;
    z-index: 1000;
    background: rgba(244, 246, 249, 1);

    @include hover {
      --border-r: var(--border-radius-8);

      .sticker-tab__arrow {
        transform: rotate(180deg);
      }
      .sticker-inner {
        --fr: 1fr;
      }
    }
  }

  .sticker-inner {
    --fr: 0fr;
    display: grid;

    grid-template-columns: var(--fr);
    will-change: transition;
    transition: grid-template-columns var(--transition-duration) linear;
    overflow: hidden;

    & > div {
      min-width: 0;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity var(--transition-duration) ease;
  }

  .swipe-enter-active,
  .swipe-leave-active {
    transition:
      right var(--transition-duration) ease,
      opacity var(--transition-duration) ease;
  }

  .swipe-enter-from,
  .swipe-leave-to {
    right: -100px;
    opacity: 0;
  }
</style>

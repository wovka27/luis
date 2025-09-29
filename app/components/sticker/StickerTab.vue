<script setup lang="ts">
  interface IProps {
    avatars: string[];
  }

  defineProps<IProps>();
</script>

<template>
  <div class="sticker-tab">
    <StickerAvatarList :list="avatars" orientation="vertical" />
    <span class="sticker-tab__arrow">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24.000000" height="24.000000" fill="none">
        <defs>
          <filter id="pixso_custom_mask_type_alpha">
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0 " />
          </filter>
        </defs>
        <mask id="mask_0" width="24.000000" height="24.000000" x="0.000000" y="0.000000" maskUnits="userSpaceOnUse">
          <g filter="url(#pixso_custom_mask_type_alpha)">
            <rect
              id="Bounding box"
              width="24.000000"
              height="24.000000"
              x="0.000000"
              y="0.000000"
              fill="rgb(217,217,217)"
            />
          </g>
        </mask>
        <g id="arrow_back" opacity="0.400000006" mask="url(#mask_0)">
          <path
            id="arrow_back"
            d="M7.82506 13.0001L13.4251 18.6001L12.0001 20.0001L4.00006 12.0001L12.0001 4.00006L13.4251 5.40006L7.82506 11.0001L20.0001 11.0001L20.0001 13.0001L7.82506 13.0001Z"
            fill="rgb(51,51,51)"
            fill-rule="nonzero"
          />
        </g>
      </svg>
    </span>
  </div>
</template>

<style lang="scss">
  .sticker-tab {
    height: 100%;
    z-index: 2;
    display: flex;
    padding: 2px 2px 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: border-radius var(--transition-duration) ease-in-out;
    gap: 32px;
    background: inherit;

    &__arrow {
      cursor: pointer;
      margin-top: 6px;
      transition: transform var(--transition-duration);
    }
  }
</style>

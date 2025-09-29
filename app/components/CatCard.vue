<script setup lang="ts">
  import { computed } from "vue";

  import UiImage from "~/components/UiImage.vue";

  type ICat = {
    id: string;
    tags: string[];
    created_at: string;
    url: string;
    mimetype: string;
  };

  const props = defineProps<{ data: ICat }>();
  const { data } = props;

  const formattedDate = computed(() => {
    try {
      const d = new Date(data.created_at);
      if (isNaN(d.getTime())) return data.created_at;
      return new Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(d);
    } catch {
      return data.created_at;
    }
  });

  const shortId = computed(() => {
    return data.id.length > 8 ? data.id.slice(-6) : data.id;
  });

  const mimeLabel = computed(() => {
    if (!data.mimetype) return "";
    return data.mimetype.replace(/image\//g, "");
  });
</script>

<template>
  <article class="cat-card" role="article" :aria-labelledby="`title-${data.id}`">
    <a
      class="cat-card__media"
      :href="data.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`Open full media for item ${data.id}`"
    >
      <UiImage class="cat-card__img" :src="data.url" />
      <div v-if="mimeLabel" class="cat-card__badge">{{ mimeLabel }}</div>
    </a>

    <div class="cat-card__body">
      <header class="cat-card__header">
        <h3 :id="`title-${data.id}`" class="cat-card__title">#{{ shortId }}</h3>
        <time class="cat-card__time" :datetime="data.created_at">
          {{ formattedDate }}
        </time>
      </header>

      <p class="cat-card__meta">
        Тип: <strong>{{ data.mimetype || "unknown" }}</strong>
      </p>

      <ul class="cat-card__tags" aria-label="tags">
        <li v-for="(t, i) in data.tags" :key="i" class="cat-card__tag">
          {{ t }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss">
  $card-bg: #ffffff;
  $muted: #8b94a6;
  $accent: #6b46c1;
  $accent-2: #00a3ff;
  $shadow: 0 6px 18px rgba(20, 24, 37, 0.08);
  $radius: 12px;

  .cat-card {
    display: grid;
    grid-template-columns: 1fr;
    background: linear-gradient(180deg, $card-bg, #fbfbfd);
    border-radius: $radius;
    box-shadow: $shadow;
    overflow: hidden;
    transition:
      transform 220ms ease,
      box-shadow 220ms ease;
    min-width: 240px;
    max-width: 360px;

    @include hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(20, 24, 37, 0.12);
    }

    &__media {
      display: block;
      position: relative;
      width: 100%;
      aspect-ratio: 16/9;
      overflow: hidden;
      background: linear-gradient(90deg, #f2f3f6, #eceef3);
      text-decoration: none;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 350ms cubic-bezier(0.2, 0.9, 0.3, 1);
    }

    &:hover &__img {
      transform: scale(1.03);
    }

    &__badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      padding: 6px 10px;
      font-size: 12px;
      border-radius: 999px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      pointer-events: none;
    }

    &__body {
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    &__title {
      margin: 0;
      font-size: 14px;
      color: #111827;
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    &__time {
      font-size: 12px;
      color: $muted;
      white-space: nowrap;
    }

    &__meta {
      margin: 0;
      font-size: 13px;
      color: $muted;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 8px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &__tag {
      background: rgba(107, 70, 193, 0.08);
      color: $accent;
      font-size: 12px;
      padding: 6px 8px;
      border-radius: 999px;
      border: 1px solid rgba(107, 70, 193, 0.08);
    }

    &__actions {
      display: flex;
      gap: 8px;
      margin-top: 6px;
    }

    &__btn {
      flex: 1 1 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 9px 12px;
      border-radius: 10px;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      color: #fff;
      background: linear-gradient(90deg, $accent, $accent-2);
      border: none;
      cursor: pointer;
      transition:
        transform 140ms ease,
        opacity 140ms ease;
      text-align: center;

      &:hover {
        transform: translateY(-2px);
        opacity: 0.98;
      }

      &--ghost {
        background: transparent;
        color: $accent;
        border: 1px solid rgba(107, 70, 193, 0.12);
        box-shadow: none;
      }
    }
  }

  /* Плавный slide + fade при появлении */
  .slide-fade-enter-active {
    transition: all 320ms cubic-bezier(0.2, 0.9, 0.3, 1);
  }

  .slide-fade-leave-active {
    transition: all 220ms ease;
  }

  .slide-fade-enter-from {
    opacity: 0;
    transform: translateX(18px);
  }

  .slide-fade-enter-to {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-fade-leave-from {
    opacity: 1;
  }

  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(8px);
  }

  /* Responsive */
  @media (max-width: 520px) {
    .cat-card {
      max-width: 100%;
      border-radius: 10px;

      &__body {
        padding: 12px;
      }

      &__title {
        font-size: 13px;
      }

      &__btn {
        padding: 8px 10px;
        font-size: 13px;
      }
    }
  }
</style>

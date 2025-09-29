<script setup lang="ts">
  const { data } = useFetch("/api/cats", { query: { limit: 30 } });
</script>

<template>
  <div>
    <div class="cards" v-if="data?.length">
      <CatCard v-for="item in data" :data="item" :key="item.id" />
    </div>
    <Sticker />
  </div>
</template>

<style scoped>
  .cards {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
  }
</style>

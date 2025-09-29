<script setup lang="ts">
  const { data } = useFetch("/api/cats", { query: { limit: 30 } });
</script>

<template>
  <div>
    <div v-if="data?.length" class="cards">
      <CatCard v-for="item in data" :key="item.id" :data="item" />
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

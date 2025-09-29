import type { ICat } from "#shared/types/cat";

const BASE_URL = "https://cataas.com";
const API_URL = `${BASE_URL}/api`;

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const response = await $fetch<ICat[]>(`${API_URL}/cats`, { query });

  return response.map((cat) => ({ ...cat, url: `${BASE_URL}/cat/${cat.id}`, tags: cat.tags.filter(Boolean) }));
});

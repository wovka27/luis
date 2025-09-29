import type { ICat } from "#shared/types/cat";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const urls = await Promise.all(
    Array.from({ length: Number(query.limit || 3) }).map(() =>
      $fetch<ICat>("https://cataas.com/cat?json=true").then((res) => res.url)
    )
  );

  return urls;
});

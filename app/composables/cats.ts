export const useCats = () => {
  const { data } = useFetch("/api/random-cat", {
    server: false,
    query: {
      limit: 3,
    },
  });
  return data;
};

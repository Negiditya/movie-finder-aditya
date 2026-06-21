export const getFavorites = () => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

export const toggleFavorite = (movie) => {
  const favorites = getFavorites();

  const exists = favorites.find((fav) => fav.id === movie.id);

  let updated;

  if (exists) {
    updated = favorites.filter((fav) => fav.id !== movie.id);
  } else {
    updated = [...favorites, movie];
  }

  localStorage.setItem("favorites", JSON.stringify(updated));

  return updated;
};

export const isFavorite = (id) => {
  return getFavorites().some((movie) => movie.id === id);
};

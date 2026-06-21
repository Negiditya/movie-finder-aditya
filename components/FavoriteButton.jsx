"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { isFavorite, toggleFavorite } from "@/lib/favorites";

export default function FavoriteButton({ movie }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(movie.id));
  }, [movie.id]);

  const handleClick = () => {
    toggleFavorite(movie);
    setFavorite(!favorite);
  };

  return (
    <button onClick={handleClick} className="absolute top-2 right-2 z-10">
      <FaHeart
        size={22}
        className={favorite ? "text-red-500" : "text-gray-300"}
      />
    </button>
  );
}

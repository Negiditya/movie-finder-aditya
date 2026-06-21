"use client";

import { useEffect, useState } from "react";

import MovieGrid from "@/components/MovieGrid";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(storedFavorites);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <BackButton />

        <h1 className="text-4xl font-bold mb-8">
          My Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No favorite movies yet.
          </div>
        ) : (
          <MovieGrid movies={favorites} />
        )}
      </div>
    </main>
  );
}

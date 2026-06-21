"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FavoriteButton from "./FavoriteButton";

export default function MovieCard({ movie, currentPage }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750";

  const query = new URLSearchParams();

  if (search) {
    query.set("search", search);
  }

  if (currentPage) {
    query.set("page", currentPage);
  }

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition relative">
      <FavoriteButton movie={movie} />

      <Link href={`/movie/${movie.id}?${query.toString()}`}>
        <img
          src={poster}
          alt={movie.title}
          className="w-full h-87.5 object-cover"
        />

        <div className="p-4">
          <h2 className="font-semibold text-lg line-clamp-1">{movie.title}</h2>

          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>{movie.release_date?.slice(0, 4)}</span>

            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

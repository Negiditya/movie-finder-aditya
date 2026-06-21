"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { getPopularMovies, searchMovies } from "@/lib/tmdb";

import SearchBar from "@/components/SearchBar";
import MovieGrid from "@/components/MovieGrid";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const initialPage = Number(searchParams.get("page")) || 1;

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch);

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Sync URL with search + page
  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedSearch.trim()) {
      params.set("search", debouncedSearch);
    }

    if (currentPage > 1) {
      params.set("page", currentPage);
    }

    const queryString = params.toString();

    router.replace(queryString ? `/?${queryString}` : "/", {
      scroll: false,
    });
  }, [debouncedSearch, currentPage, router]);

  useEffect(() => {
    fetchMovies();
  }, [debouncedSearch, currentPage]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError("");

      let data;

      if (debouncedSearch.trim()) {
        data = await searchMovies(debouncedSearch, currentPage);
      } else {
        data = await getPopularMovies(currentPage);
      }

      setMovies((data.results || []).slice(0, 12));
      setTotalPages(data.total_pages || 1);
    } catch (err) {
      console.error(err);
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  };

  const handleSearch = (value) => {
    setSearch(value);

    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  };

  if (initialLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-black">
        Loading...
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center text-red-500 bg-black">
        {error}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <SearchBar search={search} setSearch={handleSearch} />

        {loading && <p className="text-gray-400 mb-4">Searching...</p>}

        {movies.length === 0 ? (
          <div className="text-center py-12">No movies found.</div>
        ) : (
          <>
            <MovieGrid movies={movies} currentPage={currentPage} />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              hasNext={currentPage < totalPages}
            />
          </>
        )}

        <Footer />
      </div>
    </main>
  );
}

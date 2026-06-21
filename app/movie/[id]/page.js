import { getMovieDetails } from "@/lib/tmdb";
import BackButton from "@/components/BackButton";

export default async function MovieDetails({ params }) {
  const { id } = await params;

  let movie = null;

  try {
    movie = await getMovieDetails(id);
  } catch (error) {
    console.error(error);
  }

  if (!movie) {
    return (
      <main className="min-h-screen bg-black text-white p-6">
        <div className="max-w-5xl mx-auto">
          <BackButton />

          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-3xl font-bold mb-4">
              Unable to load movie details
            </h1>

            <p className="text-gray-400 text-center">
              TMDB is temporarily unavailable or the network connection was
              interrupted.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750";

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <BackButton />

        <div className="grid md:grid-cols-2 gap-10">
          <img src={poster} alt={movie.title} className="rounded-xl w-full" />

          <div>
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

            <p className="mb-4 text-gray-400">
              Release Date: {movie.release_date}
            </p>

            <p className="mb-4">⭐ {movie.vote_average?.toFixed(1)}</p>

            <p className="leading-7">
              {movie.overview || "No overview available."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

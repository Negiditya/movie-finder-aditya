"use client";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 outline-none focus:border-blue-500"
      />
    </div>
  );
}

"use client";

export default function Pagination({ currentPage, setCurrentPage, hasNext }) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
        className="px-5 py-2 bg-blue-600 rounded-lg disabled:opacity-50"
      >
        Previous
      </button>

      <span className="flex items-center">Page {currentPage}</span>

      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={!hasNext}
        className="px-5 py-2 bg-blue-600 rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

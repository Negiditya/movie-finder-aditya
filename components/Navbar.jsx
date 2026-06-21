import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-8">
      <Link href="/">
        <h1 className="text-3xl font-bold">Movie Finder</h1>
      </Link>

      <Link href="/favorites" className="px-4 py-2 bg-red-600 rounded-lg">
        Favorites
      </Link>
    </nav>
  );
}

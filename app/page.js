import { Suspense } from "react";
import HomeContent from "./HomeContent";

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center text-white bg-black">
          Loading...
        </main>
      }
    >
      <HomeContent />
    </Suspense>
  );
}

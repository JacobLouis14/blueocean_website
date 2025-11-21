"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full h-dvh flex flex-col justify-between items-center py-6">
      <div></div>
      <div className="flex items-center gap-5">
        <h2>Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="bg-primary px-4 py-1 rounded-md text-white cursor-pointer"
        >
          Try again
        </button>
      </div>
      <p className="text-primary/20">Sorry, from Blue Ocean Beverages</p>
    </div>
  );
}

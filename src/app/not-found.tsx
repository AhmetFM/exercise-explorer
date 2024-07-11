import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[80vh] gap-2">
      <h2 className="text-2xl mb-8">404: Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <span>
        The page may have been removed, moved, or is temporarily unavailable.
      </span>
      <Link
        className="font-medium border border-zinc-700 dark:bg-zinc-800 px-3 py-2 rounded-md"
        href="/"
      >
        Go back to Home
      </Link>
    </div>
  );
}

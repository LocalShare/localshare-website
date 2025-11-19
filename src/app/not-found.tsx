import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-fit">
      <h2 className="text-3xl font-bold text-destructive">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="px-4 py-2 text-xl border rounded-md hover:bg-accent/50 hover:border-transparent transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

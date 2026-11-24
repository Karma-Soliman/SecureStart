import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">Page not found</h1>

      <p className="mb-6">
        The page or security control you are looking for does not exist.
      </p>

      <Link href="/" className="underline underline-offset-4">
        Return to the homepage
      </Link>
    </main>
  )
}

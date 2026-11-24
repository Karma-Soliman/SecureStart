"use client"

import Link from "next/link"

type ControlsErrorProps = {
  error: Error & { digest?: string }
  retry: () => void
}

export default function ControlsError({ retry }: ControlsErrorProps) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">Something went wrong</h1>

      <p className="mb-6">We could not load this content. Please try again.</p>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => retry()}
          className="rounded-lg border px-4 py-2 font-medium hover:underline"
        >
          Try again
        </button>

        <Link href="/" className="underline underline-offset-4">
          Return home
        </Link>
      </div>
    </main>
  )
}

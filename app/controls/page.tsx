import type { Metadata } from "next"
import Link from "next/link"
import { controls } from "@/lib/controls"

export const metadata: Metadata = {
  title: "Security Controls | SecureStart",
  description:
    "Browse essential security controls and practical recommendations for web projects.",
}

export default async function ControlsPage() {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">Security Controls</h1>

      <p className="mb-8">
        Explore common security practices and learn how to apply them to your
        projects.
      </p>

      <ul className="space-y-6">
        {controls.map((control) => (
          <li key={control.id} className="rounded-lg border p-6">
            <p className="mb-2 text-sm">{control.category}</p>

            <h2 className="mb-3 text-xl font-semibold">
              <Link
                href={`/controls/${control.slug}`}
                className="underline underline-offset-4"
              >
                {control.title}
              </Link>
            </h2>

            <p>{control.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

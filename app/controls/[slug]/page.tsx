import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { controls } from "@/lib/controls"

type ControlPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return controls.map((control) => ({
    slug: control.slug,
  }))
}

export async function generateMetadata({
  params,
}: ControlPageProps): Promise<Metadata> {
  const { slug } = await params
  const control = controls.find((item) => item.slug === slug)

  if (!control) {
    notFound()
  }

  return {
    title: `${control.title} | SecureStart`,
    description: control.description,
  }
}

export default async function ControlPage({ params }: ControlPageProps) {
  const { slug } = await params
  const control = controls.find((item) => item.slug === slug)

  if (!control) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/controls" className="underline underline-offset-4">
        Back to security controls
      </Link>

      <article className="mt-8">
        <p className="mb-2 text-sm">{control.category}</p>

        <h1 className="mb-6 text-3xl font-bold">{control.title}</h1>

        <p className="mb-8 text-lg">{control.description}</p>

        <section className="rounded-lg border p-6">
          <h2 className="mb-3 text-xl font-semibold">Recommendation</h2>

          <p>{control.recommendation}</p>
        </section>
      </article>
    </main>
  )
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SecureStart | Web Security Self-Assessment",
  description: "Explore essential web security practices and learn how to improve your projects."
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-4xl font-bold">SecureStart</h1>
      <p className="mb-6 text-lg">
        Learn about essential web security practices and discover ways to
        improve your projects
      </p>
      <Link
        href="/controls"
        className="ont-medium underline underline-offset-4"
      >Explore security controls</Link>
    </main>
  )
}
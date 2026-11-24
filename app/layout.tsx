import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import NavLink from "@/components/NavLink"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SecureStart",
  description: "Explore essential web security practices for your projects.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-5">
            <p className="text-xl font-bold">SecureStart</p>

            <nav aria-label="Main navigation">
              <ul className="flex gap-6">
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/controls">Controls</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t px-6 py-5 text-center text-sm">
          SecureStart — Web Security Self-Assessment
        </footer>
      </body>
    </html>
  )
}

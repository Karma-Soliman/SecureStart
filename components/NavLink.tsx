"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLinkProps = {
  href: string
  children: ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()

  const isExactMatch = pathname === href
  const isActive =
    isExactMatch || (href !== "/" && pathname.startsWith(`${href}/`))

  return (
    <Link
      href={href}
      aria-current={isExactMatch ? "page" : isActive ? "location" : undefined}
      className={
        isActive
          ? "font-bold underline underline-offset-4"
          : "hover:underline hover:underline-offset-4"
      }
    >
      {children}
    </Link>
  )
}

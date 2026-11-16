import type { ReactNode } from "react"

type ControlsLayoutProps = {
  children: ReactNode
}

export default function ControlsLayout({ children }: ControlsLayoutProps) {
  return (
    <div>
      <aside
        aria-label="About the controls library"
        className="border-b bg-black/5"
      >
        <div className="mx-auto max-w-4xl px-6 py-4">
          <h2 className="font-semibold">Security Learning Library</h2>
          <p className="mt-1 text-sm">
            Explore security controls and practical recommendations for your web
            projects.
          </p>
        </div>
      </aside>

      {children}
    </div>
  )
}

export type SecurityControl = {
  id: string
  slug: string
  title: string
  category: string
  description: string
  recommendation: string
}

export const controls: SecurityControl[] = [
  {
    id: "1",
    slug: "use-https",
    title: "Use HTTPS",
    category: "Transport security",
    description:
      "HTTPS encrypts data exchanged between a browser and a website.",
    recommendation:
      "Enable HTTPS with a valid certificate and redirect HTTP traffic to HTTPS.",
  },
  {
    id: "2",
    slug: "validate-user-input",
    title: "Validate user input",
    category: "Input handling",
    description:
      "Checking submitted data helps prevent unexpected or invalid values from entering the application.",
    recommendation:
      "Validate input on the server using rules for expected types, lengths, formats, and allowed values.",
  },
  {
    id: "3",
    slug: "protect-secrets",
    title: "Protect application secrets",
    category: "Configuration",
    description:
      "API keys, database passwords, and other secrets should remain private.",
    recommendation:
      "Store secrets in server-side environment variables and keep them out of source control and browser code.",
  },
  {
    id: "4",
    slug: "keep-dependencies-updated",
    title: "Keep dependencies updated",
    category: "Maintenance",
    description:
      "Outdated packages can contain known vulnerabilities that affect an application.",
    recommendation:
      "Regularly review dependencies and apply relevant security updates.",
  },
  {
    id: "5",
    slug: "handle-errors-safely",
    title: "Handle errors safely",
    category: "Error handling",
    description:
      "Detailed error messages can accidentally reveal internal application information.",
    recommendation:
      "Show helpful, general messages to users and keep sensitive technical details in server-side logs.",
  },
]

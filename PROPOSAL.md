# Project Proposal

- **Name:** Karma Soliman
- **Project title:** SecureStart — Web Security Self-Assessment Platform
- **Pitch (one sentence):** A full-stack web application that helps developers assess their websites against essential security practices, track their progress, and identify areas for improvement.
- **Target users:** Web developers, computer science students, and small development teams who want to improve their applications' security.

## Pages

| URL | Content | Dynamic segment? | Rendering strategy and why |
|---|---|---|---|
| `/` | Homepage and dashboard displaying saved assessments | No | Client-side rendering for interactive assessment data |
| `/controls` | Library of security controls organized by category | No | Server-side rendering for SEO and accessible content |
| `/controls/[slug]` | Detailed explanations of security controls and recommended practices | Yes (`[slug]`) | Static generation (SSG) for SEO and performance |
| `/audits/new` | Form to create a security assessment and complete a checklist | No | Client-side rendering for interactive forms |
| `/audits/[id]` | Assessment results, security score, recommendations, and editing options | Yes (`[id]`) | Dynamic server rendering for saved data, with client-side interactions |

## Data

**Entities (3):**

1. **Audit:** `id`, `projectName`, `description`, `createdAt`, `updatedAt`
2. **SecurityControl:** `id`, `title`, `slug`, `category`, `description`, `severity`, `recommendation`
3. **AuditResponse:** `id`, `auditId`, `controlId`, `answer` (Yes/No/Unsure)

**Relationships:**
- One Audit has many AuditResponses.
- One SecurityControl can belong to many AuditResponses.
- AuditResponse connects Audit and SecurityControl, forming a many-to-many relationship.

**Database:** PostgreSQL with Prisma ORM.

## Write Actions

Users can:

- **Create:** Start a new security assessment for a web project.
- **Read:** View saved assessments, security controls, and results.
- **Update:** Modify checklist answers and project information.
- **Delete:** Remove an existing assessment.

The application automatically recalculates assessment results and identifies missing security practices based on user responses.

## Repository

**GitHub URL:** To be created.
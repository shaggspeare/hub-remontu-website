---
name: context7
description: >-
  Use this skill whenever you need to fetch real-time, version-specific documentation,
  API references, or modern code patterns for third-party libraries and frameworks (e.g., Payload CMS, Next.js, React, Upstash) using Context7.
---

# Context7 Skill: Live Documentation & API Reference Assistant

Context7 provides up-to-date, version-accurate documentation and code patterns for libraries and frameworks, eliminating hallucinations from stale training data.

## When to Use This Skill

- When working with modern library features (e.g., Payload CMS 3.x/4.x features like Folders, Next.js App Router, React 19).
- When looking up the exact configuration schema, hooks, or plugin interfaces for third-party packages.
- When verifying deprecated vs. current APIs across evolving ecosystems.

---

## How to Query Context7

### 1. Model Context Protocol (MCP) Server
Context7 can be integrated directly as an MCP server:
- **Server Endpoint:** `https://mcp.context7.com/mcp`
- **Authentication:** `Authorization: Bearer <CONTEXT7_API_KEY>` (set via environment or editor settings)
- **Natural Prompt Trigger:** Prefix or include `"use context7"` in prompts to query documentation dynamically.

### 2. Context7 CLI (`ctx7`)
You can use the Context7 CLI to manage skills and query libraries:

```bash
# Setup Context7 integration
npx ctx7 setup

# Search documentation for a specific library or topic
npx ctx7 library <library_name> "<search query>"

# Search for available agent skills
npx ctx7 skills search <topic>

# Generate custom AI agent skills tailored to a specific framework or domain
npx ctx7 skills generate
```

---

## Best Practices

1. **Be Specific with Versions:** When querying documentation for frameworks like Payload CMS or Next.js, specify the major version (e.g., `Payload CMS 3.x Folders`).
2. **Distinguish Logical Folders vs Storage Prefixes:**
   - **Admin UI Folders (Native):** Configured via `folders: true` on collections for hierarchical DAM organization.
   - **Storage Prefixes:** Configured via cloud storage adapters (S3, Vercel Blob, Payload Cloud) for file path structuring.
3. **Verify API Signatures:** Always cross-reference generated schemas against the installed package versions in `package.json`.

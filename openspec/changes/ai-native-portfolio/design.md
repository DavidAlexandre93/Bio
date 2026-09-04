# Design

## Product flow

1. The visitor lands on a profile command surface with a visible availability state and primary intents.
2. They can search by natural language such as `show me data projects` or choose a suggested intent.
3. Results are ranked locally by title, description, accent and tags; no request leaves the browser.
4. The visitor can ask the optional assistant a question. The browser sends only the question and locale to `/api/assistant`.
5. The server validates the payload, applies rate limiting and timeout, builds a bounded prompt from curated portfolio data, and calls the configured provider.
6. If the provider is missing or fails, the UI keeps discovery available and explains that the assistant is temporarily offline.

## Architecture

- `src/data/links.js`: canonical portfolio records and searchable metadata.
- `src/components/DiscoveryPanel.jsx`: local search, intent chips, ranked results and assistant form.
- `src/hooks/usePortfolioDiscovery.js`: pure client interaction state and ranking.
- `src/styles/global.css`: design tokens, responsive layout and accessible states.
- `api/assistant.js`: Vercel-compatible server endpoint; no secret is imported by client code.
- `api/providers/openai.js`: provider adapter implementing a common `generateAnswer` contract.

## API contract

`POST /api/assistant`

Request: `{ "question": string, "language": "pt-BR" | "en-US" | "fr-FR" | "ja-JP" }`

Success: `{ "answer": string, "source": "ai" }`

Unavailable or invalid requests use a stable JSON error shape: `{ "error": string, "code": string }`.

Security limits: question 600 UTF-8 characters, output 450 tokens, 10 requests per IP per 10 minutes, 8 second provider timeout, one retry only for transient failures, no conversation persistence.

## UX requirements

- Light/dark system mode via tokens, with a refined graphite, coral and mint palette.
- Keyboard reachable search and assistant controls with visible focus states.
- Loading state uses text and an inline progress treatment; errors preserve entered question.
- Empty discovery state suggests concrete intents.
- Results are links and retain existing external destinations.
- Reduced motion disables non-essential transitions.
- Mobile layout is one column; desktop layout gives discovery and assistant equal visual priority.

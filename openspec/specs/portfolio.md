# Portfolio Product Specification

## Capabilities

The product presents David Alexandre Fernandes, his selected work, professional links, resumes and contact routes. Existing external links and referral attribution are preserved.

The product provides local intent-based discovery over curated portfolio records. Discovery must work without network access and must never require an AI provider.

The product may provide a contextual assistant through `POST /api/assistant`. It must answer from the curated context, avoid inventing experience or personal data, and communicate unavailability without blocking the rest of the portfolio.

## Quality attributes

- React 19 + Vite frontend remains modular and statically buildable.
- Provider credentials never appear in browser bundles or client environment variables.
- All interactive controls have labels, focus visibility, keyboard access and mobile-safe layout.
- Async states are explicit: idle, loading, success, unavailable and error.
- User input is bounded and not persisted by default.
- Existing locales remain supported and new strings are translated for every locale.

## Acceptance criteria

1. A visitor can locate a relevant project from a natural-language query without an API call.
2. A visitor can ask a portfolio question and receive either a grounded answer or a clear unavailable state.
3. The assistant endpoint rejects malformed/oversized input, applies rate limiting and has a timeout.
4. No API key is present in `src/` or the built client output.
5. Existing resumes, project links, social links, referral code and locale detection continue to work.
6. `npm run lint`, `npm test` and `npm run build` pass.
7. The final UI remains usable at narrow mobile and wide desktop viewports and honors reduced motion.

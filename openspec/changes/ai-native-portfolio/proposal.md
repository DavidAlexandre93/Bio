# Change: AI-native portfolio experience

## Status

Implemented

## Context

The current product is a static React/Vite portfolio with localized profile, project and social link sections. It has no semantic discovery, contextual guidance, or server-side AI boundary. The visual language is dark and componentized, but the primary workflow is still a linear scroll through links.

## Outcome

Turn the portfolio into a premium, AI-native personal product without weakening its static deployment model:

- Make the hero an intentional command surface for exploring David's work.
- Add semantic portfolio discovery and contextual recommendations without requiring an account.
- Add an optional server-side AI assistant that answers only from curated portfolio context.
- Keep all existing destinations, resume links, localization and referral tracking working.
- Keep provider credentials exclusively on the server and fail gracefully when AI is unavailable.

## Scope

In scope: portfolio UI, semantic local search, recommendation logic, assistant API contract, provider abstraction, rate limiting, timeout/retry behavior, accessibility, responsive behavior, and documentation.

Out of scope: authentication, persistent user profiles, CMS authoring, autonomous external actions, and sending personal data to AI providers.

## Risks and mitigations

- AI availability varies by deployment: local semantic discovery remains fully functional and the assistant shows a useful unavailable state.
- Prompt injection or fabricated claims: the server uses a fixed portfolio context and instructs the model to decline unsupported claims.
- Cost abuse: bounded input/output, request timeout, per-IP rate limit and no streaming until the hosting runtime contract is verified.

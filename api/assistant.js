import { generateAnswer } from './providers/openai.js';

const attempts = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 10;
const MAX_TRACKED_IPS = 5000;
const MAX_QUESTION_LENGTH = 600;
const SUPPORTED_LANGUAGES = new Set(['pt-BR', 'en-US', 'fr-FR', 'ja-JP']);
const context =
  'David Alexandre Fernandes is a software engineer focused on creative engineering and digital products. Selected work includes Hortelan AgTech, Website and Portfolio. Professional routes include GitHub, LinkedIn, Vercel, Discord and Calendly.';

function getIp(request) {
  return (
    request.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    request.socket?.remoteAddress ||
    'unknown'
  );
}

function isRateLimited(ip) {
  const now = Date.now();
  let entry = attempts.get(ip);

  if (!entry || now >= entry.resetAt) {
    if (attempts.size >= MAX_TRACKED_IPS) {
      for (const [trackedIp, trackedEntry] of attempts) {
        if (now >= trackedEntry.resetAt) attempts.delete(trackedIp);
      }

      if (attempts.size >= MAX_TRACKED_IPS) {
        attempts.delete(attempts.keys().next().value);
      }
    }

    entry = { count: 0, resetAt: now + WINDOW_MS };
    attempts.set(ip, entry);
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed', code: 'method_not_allowed' });
  }
  if (isRateLimited(getIp(request)))
    return response.status(429).json({ error: 'Too many requests', code: 'rate_limited' });

  const { question, language = 'en-US' } = request.body || {};
  if (
    typeof question !== 'string' ||
    !question.trim() ||
    question.length > MAX_QUESTION_LENGTH ||
    !SUPPORTED_LANGUAGES.has(language)
  ) {
    return response
      .status(400)
      .json({ error: 'Question must be between 1 and 600 characters', code: 'invalid_question' });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const answer = await generateAnswer({
      question: question.trim(),
      language,
      context,
      signal: controller.signal
    });
    if (!answer)
      return response
        .status(503)
        .json({ error: 'Assistant is not configured', code: 'provider_unavailable' });
    return response.status(200).json({ answer, source: 'ai' });
  } catch (error) {
    return response
      .status(error.name === 'AbortError' ? 504 : 502)
      .json({ error: 'Assistant temporarily unavailable', code: 'provider_error' });
  } finally {
    clearTimeout(timeout);
  }
}

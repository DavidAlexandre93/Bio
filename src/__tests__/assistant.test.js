import assert from 'node:assert/strict';
import test from 'node:test';
import handler from '../../api/assistant.js';

function createResponse() {
  return {
    headers: {},
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      this.headers[name] = value;
    },
    json(body) {
      this.body = body;
      return this;
    }
  };
}

test('assistant endpoint rejects non-POST requests without caching', async () => {
  const response = createResponse();

  await handler({ method: 'GET', headers: {} }, response);

  assert.equal(response.statusCode, 405);
  assert.equal(response.headers.Allow, 'POST');
  assert.equal(response.headers['Cache-Control'], 'no-store');
});

test('assistant endpoint validates input before calling the provider', async () => {
  const response = createResponse();

  await handler(
    { method: 'POST', headers: {}, body: { question: ' ', language: 'pt-BR' } },
    response
  );

  assert.equal(response.statusCode, 400);
  assert.equal(response.body.code, 'invalid_question');
  assert.equal(response.headers['Cache-Control'], 'no-store');
});

test('assistant endpoint returns a successful provider answer', async () => {
  const previousApiKey = process.env.OPENAI_API_KEY;
  const previousFetch = globalThis.fetch;
  const response = createResponse();

  process.env.OPENAI_API_KEY = 'test-key';
  globalThis.fetch = async () =>
    new Response(JSON.stringify({ choices: [{ message: { content: 'A grounded answer.' } }] }), {
      headers: { 'Content-Type': 'application/json' }
    });

  try {
    await handler(
      {
        method: 'POST',
        headers: { 'x-forwarded-for': '198.51.100.43' },
        body: { question: 'What projects are featured?', language: 'en-US' }
      },
      response
    );
  } finally {
    if (previousApiKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = previousApiKey;
    globalThis.fetch = previousFetch;
  }

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.answer, 'A grounded answer.');
});

test('assistant endpoint rate limits repeated requests from one client', async () => {
  const request = {
    method: 'POST',
    headers: { 'x-forwarded-for': '198.51.100.42' },
    body: { question: ' ', language: 'pt-BR' }
  };
  let response;

  for (let index = 0; index < 11; index += 1) {
    response = createResponse();
    await handler(request, response);
  }

  assert.equal(response.statusCode, 429);
  assert.equal(response.body.code, 'rate_limited');
});

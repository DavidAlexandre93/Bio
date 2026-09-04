const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

export async function generateAnswer({ question, language, context, signal }) {
  if (!process.env.OPENAI_API_KEY) return null;
  const request = {
    method: 'POST',
    signal,
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.2,
      max_tokens: 450,
      messages: [
        {
          role: 'system',
          content: `Answer in ${language}. Use only this portfolio context: ${context}. If the context does not support an answer, say so clearly. Never invent facts, links, availability or personal data.`
        },
        { role: 'user', content: question }
      ]
    })
  };

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const response = await fetch(OPENAI_ENDPOINT, request);
    if (response.ok) {
      const payload = await response.json();
      return payload.choices?.[0]?.message?.content?.trim() || null;
    }
    if (response.status < 500 && response.status !== 429)
      throw new Error(`provider_${response.status}`);
  }
  throw new Error('provider_retry_exhausted');
}

import fetch from 'node-fetch';
import { BUIENRADAR_URL, REQUEST_TIMEOUT_MS } from '../config/index.js';

export async function fetchWeatherData() {
  const controller = new AbortController();

  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(BUIENRADAR_URL, { signal: controller.signal });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      const err = new Error(`Upstream responded with status ${res.status}`);

      err.status = res.status;
      err.body = body;

      throw err;
    }

    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      const timeoutErr = new Error('Request to upstream timed out');

      timeoutErr.code = 'ETIMEDOUT';

      throw timeoutErr;
    }

    throw err;
  } finally {
    clearTimeout(timer);
  }
}

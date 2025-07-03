import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';

// Mock the modules BEFORE importing app
vi.mock('./routes/api', () => ({
  callAPI: vi.fn(),
}));

const finalValue: string = `"id":"2a12f0cb-62e6-4f7d-a9f4-5b3920f73672","url":"https://developer.mozilla.org/en-US/docs/Web/CSS/zoom","initialValue":"1","order":426`

import app from './app';

describe('Express Routes', () => {
  it('GET /api/update should call API and return message', async () => {
    const res = await request(app).get('/api/update');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Calling Unstyle API');
  });

  it('GET / should redirect to /api/get and return initial values JSON', async () => {
    const res = await request(app).get('/').redirects(1);
    expect(res.status).toBe(200);
    expect(res.text).toContain(finalValue);
    
  }, 5000);

  it('GET /api/get should return initial values JSON', async () => {
    const res = await request(app).get('/api/get');
    expect(res.status).toBe(200);
    expect(res.text).toContain(finalValue);
  });

  it('GET * should return a 404 message with no redirect', async () => {
    const res = await request(app).get('/non-existent-route');
    expect(res.status).toBe(404);
    expect(res.header.location).toBeUndefined();
    expect(res.text).toBe('Route not found');
  });
});

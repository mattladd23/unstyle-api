import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';

// Mock the modules BEFORE importing app
vi.mock('./routes/api', () => ({
  callAPI: vi.fn(),
}));

vi.mock('./data/db', () => ({
  prodDb: {
    read: vi.fn(),
    data: { key: 'value' }
  }
}));

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
    expect(res.body).toEqual({ key: 'value' });
  }, 5000);

  it('GET /api/get should return initial values JSON', async () => {
    const res = await request(app).get('/api/get');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ key: 'value' });
  });

  it('GET * should return a 404 message with no redirect', async () => {
    const res = await request(app).get('/non-existent-route');
    expect(res.status).toBe(404);
    expect(res.text).toBe('Route not found');
  });
});

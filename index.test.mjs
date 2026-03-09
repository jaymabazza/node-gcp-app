import request from 'supertest';
import app from './index.js';

describe('Express App Endpoints', () => {
  // Test the Main Route
  it('should return "Hello World" on GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hello World');
  });

  // Test the Health Check
  it('should return "OK" on GET /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('OK');
  });
});

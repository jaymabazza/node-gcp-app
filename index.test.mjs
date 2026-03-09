import request from 'supertest';
import app from './index.js';

let server;

beforeAll(() => {
  // If your index.js doesn't have the guard above, 
  // you might need to start it here or handle the export differently
});

afterAll(async () => {
  // If you started a server, close it here
  // await new Promise(resolve => server.close(resolve));
});

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});

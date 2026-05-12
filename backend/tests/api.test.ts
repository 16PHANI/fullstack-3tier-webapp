import request from 'supertest';
import app from '../src/server';

describe('API Endpoints', () => {
  test('GET / returns service info', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.service).toContain('Full-Stack');
  });

  test('GET /health returns healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  test('GET /api/users returns user list', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('POST /api/users creates user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Test User', email: 'test@test.com' });
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
  });

  test('POST /api/users fails without email', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'No Email' });
    expect(res.status).toBe(400);
  });

  test('GET /api/users/:id returns 404 for missing user', async () => {
    const res = await request(app).get('/api/users/9999');
    expect(res.status).toBe(404);
  });
});

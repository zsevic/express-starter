import { describe, it } from 'node:test';
import request from 'supertest';
import app from '../src/index.js';

describe('API tests', () => {
  const api = request(app);
  it('GET /', (done) => {
    api.get('/').expect(200, done);
  });

  it('GET /api/custom', (done) => {
    api.get('/api/custom').expect(200, done);
  });
});

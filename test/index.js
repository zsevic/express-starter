import { after, describe, it } from 'node:test';
import request from 'supertest';
import app from '../src/index.js';

describe('API tests', () => {
  const api = request(app);

  after(() => {
    setTimeout(() => {
      process.exit(0);
    }, 5000);
  });

  it('GET /', (done) => {
    api.get('/').expect(200, done);
  });

  it('GET /api/custom', (done) => {
    api.get('/api/custom').expect(200, done);
  });
});

import express from 'express';
import { afterEach, beforeEach, describe, it } from 'node:test';
import mongoose from 'mongoose';
import request from 'supertest';
import apiRouter from '../src/api/index.js';
import config from '../src/config/constants.js';

describe('API tests', () => {
  const app = express();
  app.use('/api', apiRouter);

  beforeEach(async () => {
    await mongoose.connect(config.MONGODB_URL);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  it('GET /', async () => request(app).get('/').expect(404));

  it('GET /api/custom', async () =>
    request(app).get('/api/custom').expect(200));
});

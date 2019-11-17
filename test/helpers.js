import request from 'supertest';
import app from '../src';

global.api = request(app);

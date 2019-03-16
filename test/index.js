import request from 'supertest'
import app from '../src'

describe('API tests', () => {
  it('GET /', done => {
    request(app)
      .get('/')
      .expect(200, done)
  })
})

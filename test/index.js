describe('API tests', () => {
  it('GET /', done => {
    api.get('/').expect(200, done)
  })

  it('GET /api/custom', done => {
    api.get('/api/custom').expect(200, done)
  })
})

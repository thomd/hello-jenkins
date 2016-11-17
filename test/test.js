var test = require('supertest')
var app = require('../app')

describe('GET /', () => {
  it('should respond with Hello World', (done) => {
    test(app).get('/').expect('Hello World', done)
  })
})

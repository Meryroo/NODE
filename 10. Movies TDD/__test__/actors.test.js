const request = require('supertest')
const server = require('../src/index')

    test('should return json ', async () => {
        await request(server)
        .get('/api/v1/actors')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    })
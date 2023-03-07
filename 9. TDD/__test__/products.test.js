const request = require('supertest')
const server = require('../server')
const {Builder} = require('../Builders/product-builder.js')
const {connect, getUri, closeDb} = require('../db/index')

jest.mock('../service/product-service.js')

beforeAll(async () => {
    const uri = await getUri()
    await connect({ uri })
  })


afterAll(async () => {
    await closeDb()
  })

describe('POST/products', () => {
    test('should store a new product', async () => {
        const product = Builder.product()

        const response = await request(server)
          .post('/products')
          .send(product)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)

      const {_id, ...productStored } = response.body
        expect(productStored).toEqual(product)
        expect(_id).toBeTruthy()
      })
})

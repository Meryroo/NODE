const express = require('express');
const router = express.Router();
const {store} = require('./service/product-service')

router.post('/products', async (req, res) => {
    const {name, description, price} = req.body
    const _id = 'abc'
    await store({name, description, price})
    res.status(201).json({
        name, description, price, _id
    })
})

module.exports = router
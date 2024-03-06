const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express()
const { connectMongoDB } = require('./db/dbConfig')
const port = process.env.PORT || 4000

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use('/products', require('./routes/Products'))

app.listen(port, () => {
    connectMongoDB()
    console.log(`Server running... http://localhost:${port}`)
})
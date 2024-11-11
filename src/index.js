const express = require('express')
const { testRouteController } = require('./routes/test/testRoute')
const cors = require('cors')
const app= express()
require('dotenv').config()


app.use(cors())
app.use(express.json())
app.use(testRouteController)

const PORT =process.env.PORT

app.listen(PORT,()=>(console.log(`This Sever is running on ${PORT}`)))

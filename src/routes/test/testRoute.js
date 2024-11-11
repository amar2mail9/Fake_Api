const express= require('express')
const {  testControllers } = require('../../controller/testControllers')

const testRoute = express.Router()




// object.get(routenem,midleware,handlefuction)
testRoute.get('/test/orders',testControllers)

exports.testRouteController = testRoute
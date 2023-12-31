const express = require ('express')
const mongoose = require ("mongoose")
const dotenv = require ('dotenv').config()
const cors = require ('cors')
const app = express()

// connect db

mongoose.connect(process.env.MONGO_URL, () => console.log ('MongoDB has been started  successfully'))
// connect server
app.listen(process.env.PORT,() => console.log ('Server has been started successfully'))


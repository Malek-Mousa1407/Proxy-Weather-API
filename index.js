const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100
})

// Middleware
app.use(limiter)
app.use(express.static('public'))
app.set('trust proxy', 1)

// Routes
app.use('/api', require('./routes/weather.js'))

// Enable CORS
app.use(cors())

// Initializing the server
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})
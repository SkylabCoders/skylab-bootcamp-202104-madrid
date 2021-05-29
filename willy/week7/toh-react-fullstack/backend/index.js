const express = require('express')
const debug = require('debug')('app')
const morgan = require('morgan')
const cors = require('cors')
const chalk = require('chalk')
require('dotenv').config()
const {connect} = require('mongoose')
const heroRoutes = require('./routes/heroRoutes')

connect(process.env.DDBB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const app = express();

    const PORT = process.env.PORT || 4000;
    app.use(cors())
    app.use(express.json())
    app.use(morgan('dev'))
    app.use('/api/hero', heroRoutes)

    app.listen(PORT, () =>
    debug(`Server is running in ${PORT}`))
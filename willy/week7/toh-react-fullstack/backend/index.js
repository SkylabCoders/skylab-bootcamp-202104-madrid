const express = require('express')
const debug = require('debug')('app')
const morgan = require('morgan')
const cors = require('cors')
const chalk = require('chalk')
require('dotenv').config()
const {connect} = require('mongoose')

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

    app.listen(PORT, () =>
    debug(`Server is running in ${PORT}`))
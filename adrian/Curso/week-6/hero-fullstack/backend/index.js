
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const server = express()
const debug = require('debug')('app');
const chalk = require('chalk');
server.use(morgan('dev'))


require('dotenv').config();
mongoose.connect(process.env.DDBB_URL, { useNewUrlParser: true,  useUnifiedTopology: true })
const cors = require('cors')

server.use(express.json())
server.use(cors())
//definir la ruta raiz
const heroRouter = require('./routes/heroRoutes')
server.use('/api/heroes', heroRouter)
//definir los mecanismos para escuchar peticiones
const port = 4000
server.listen(
    port, 
    ( )=> debug(`Server is running on ${chalk.yellow(`localhost://${port}`)}`),
    ); 



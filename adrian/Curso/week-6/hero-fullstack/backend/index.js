
const express = require('express')

const mongoose = require('mongoose');
const server = express()
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
server.listen(port, ( )=> console.log(`Server is running in localhost://${port}`)) 



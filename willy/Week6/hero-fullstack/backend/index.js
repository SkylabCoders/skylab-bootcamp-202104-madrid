
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('server')

require('dotenv').config()
mongoose.connect(
    process.env.DDBB_URL, 
    { useNewUrlParser: true ,
     useUnifiedTopology: true },
    );


const server = express();

server.use(cors())

server.use(express.json()) 


const marvelRouter = require('./routes/marvelRouter')
const heroRouter = require('./routes/heroRouter');
const { Mongoose } = require('mongoose');


server.use('/v1/public/characters/results', marvelRouter)
server.use('/api/heroes', heroRouter)

const port = 4000

server.listen(port, () => {
    debug(`Hola holita, te estoy escuchandito en el puerto ${port}`)
})
//importar express
const express = require('express')
//crear el servidor
const server = express()

server.use(express.json())
//definir la ruta raiz
const heroRouter = require('./routes/heroRouter')
server.use('/api/heroes', heroRouter)
//definir los mecanismos para escuchar peticiones
const port = 4000
server.listen(port, ( )=> console.log(`Server is running in localhost://${port}`)) 



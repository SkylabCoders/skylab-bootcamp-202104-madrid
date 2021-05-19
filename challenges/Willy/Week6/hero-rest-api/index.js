// importar expres
const express = require('express')

//crear el servirdor

const server = express();

server.use(express.json()) //esto habilita el body del server en json

//definir una ruta raiz
// server.get('/api/heroes', (req, res) => {
//     res.send('Hola Aday')
// })
const heroRouter = require('./routes/heroRouter')

//aqui vinculamos un camino con una ruta
server.use('/api/heroes', heroRouter)
// const routes = express.Router()
// routes.route('/').get((req, res) => {
//     res.send('Hola');
//   });

//escuchar en un puerto
const port = 4000

server.listen(port, () => {
    console.log(`Hola holita, te estoy escuchandito en el puerto ${port}`)
})
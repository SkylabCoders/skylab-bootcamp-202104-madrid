//que vamos a utilizar para crear el servidor 
//cpn que vamos a escuchar eventos
const express  = require('express')

//crear servidor
const server = express();



//definir las rutas




server.use('/api/heroes', heroRoutes)
//definir los mecanismos para escuchar peticiones
server.listen(4000, ( )=> console.log('Server is running in localhost://4000')) 


//escuchar petociones
const express = require('express');
const routes = require('./router/heroRouter');

const server = express();

server.use('/api/heroes', routes);
server.listen(4000, () => console.log('Server is running in port 4000'));

// pasos
// que vamos a utilizar para crear el servidor
// con que creamos el servidor
// const http = require('express');
// const EventEmiter = require('events');
// crear el servidor
// const requestListener = (req, res) => {
//   res.end('skylab');
// };
// const server = http.createServer(requestListener);
// definir los rutas o mecanismos  para escuchar peticiones
// server.on('myevent', () => console.log('ha ocurrido un evento'));
// server.on('myevent', () => console.log('ha ocurrido un evento'));
// server.on('myevent', () => console.log('ha ocurrido un evento'));

// escuchar las peticiones
// server.emit('myevent');
// server.listen(4000, () => console.log('Server is running in port 4000'));

// server.get('/api/heroes', (req, res) => {
//   console.log(req);
//   res.send(heroes);
// });
// server.get('/api/heroes/:heroId', (req, res) => {
//   const hero = heroes.find((currentHero) => currentHero.id === +req.params.heroId);
//   if (hero) {
//     res.send(hero);
//   } else {
//     res.status(404);
//     res.send('no encontre el heroe');
//   }
// });
// // escuchar las peticiones
// server.listen(4000, () => console.log('Server is running in port 4000'));

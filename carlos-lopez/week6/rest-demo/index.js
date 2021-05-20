// Con qué creamos el servidor
const express = require('express');
const heroRoutes = require('./router/heroRouter')();
const heroes = require('./controllers/heroes');

server.listen(4000, () => console.log('Server is runnning in http://localhost:4000'));

// Crear el servidor

// Definir las rutas dentro del servidor
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
//     res.send('no encontré el heroe');
//   }
// });

// // Con qué creamos el servidor

/*
Otro ejemplo
*/
// const http = require('http');

// // Crear el servidor
// const requestListener = (req, res) => {
//   res.write('Mucho pipi por madriz');
//   res.end();
// };

// // Definir las rutas dentro del servidor
// const server = http.createServer(requestListener);

// // Escuchar las peticiones
// server.listen(4000, () => console.log('Server is runnning in http://localhost:4000'));

/*
Otro ejemplo
*/

// // Con qué creamos el servidor
// const EventEmiter = require('events');

// // Crear el servidor
// const server1 = new EventEmiter();

// // Definir las rutas dentro del servidor
// server1.on('myevent', () => console.log('Ha ocurrido un evento'));
// server1.on('myevent', () => console.log('Ha ocurrido un evento'));
// server1.on('myevent', () => console.log('Ha ocurrido un evento'));
// server1.on('myevent', () => console.log('Ha ocurrido un evento'));
// server1.on('myevent', () => console.log('Ha ocurrido un evento'));

// // Escuchar las peticiones
// server1.emit('myevent');

/**
 * que vamos a utilizar para crear el servidor
 * con que vamso a escuchar eventos
 */

const express = require('express');
const heroes = require('./constantes/mockHeros');

// crear el servidor
const server = express();

// Definir las rutas
// server.get('/api/heroes', (req, res) => {
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
//   console.log(req);
// });

// server.get('/', (req, res) => {
//   res.send('/ tambien funciona');
// });

const routes = require('./Routes/heroRoute');

server.use('/api/heroes', routes);
// escuchar las peticiones
server.listen(4000, () => console.log('Server is running in http//localhost:4000'));

// module.exports = { requireListerner, listenCallback };

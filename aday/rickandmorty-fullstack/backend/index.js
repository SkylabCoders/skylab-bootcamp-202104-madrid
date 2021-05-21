// con qué creamos el servidor

const express = require('express');

// crear el servidor

const server = express();

// cuando envias algo en el postman a través de body en formato json hay que:
server.use(express.json());

const heroesRoutes = require('./routes/heroRoutes');
const ramRoutes = require('./routes/ramRoutes');

server.use('/api/heroes', heroesRoutes);
server.use('/api/character', ramRoutes);
// definir las rutas dentro del servidor

// server.get('/api/heroes', (req, res) => {
//   res.send(heroes);
// });

// server.get('/api/heroes/:heroId', (req, res) => {
// // recibir respuesta sin el if:  res.send(heroes.find((hero) => hero.id === +req.params.heroId));

//   const hero = heroes.find((hero) => hero.id === +req.params.heroId);

//   if (hero) {
//     res.send(hero);
//   } else {
//     res.status(404);
//     res.send('no encontré el héroe');
//   }
// });

// escuchar las peticiones
server.listen(4000, () => console.log('Server is running in http://localhost://4000'));

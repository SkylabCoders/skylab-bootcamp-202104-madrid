// con qué creamos el servidor

const express = require('express');

// crear el servidor

const server = express();

const heroes = [
  { id: 14, name: 'Spiderman' },
  { id: 15, name: 'Batman' },
];

// definir las rutas dentro del servidor

server.get('/api/heroes', (req, res) => {
  res.send(heroes);
});

server.get('/api/heroes/:heroId', (req, res) => {
// // recibir respuesta sin el if:  res.send(heroes.find((hero) => hero.id === +req.params.heroId));

  const hero = heroes.find((hero) => hero.id === +req.params.heroId);

  if (hero) {
    res.send(hero);
  } else {
    res.status(404);
    res.send('no encontré el héroe');
  }
});

/* const heroRoutes = express.Router();
 heroRoutes
   .route('/')
   .get((req, res) => {
     res.send(heroes);
   });
 heroRoutes
   .route('/:heroId')
   .get((req, res) => {
     res.send(heroes.find((hero) => hero.id === +req.params.heroId));
   })
   .delete((req, res) => {
     res.send(`Se ha eliminado el héroe ${req.params.heroId}`);
   });
*/

// vincular un camino con una ruta
server.use('/api/heroes', heroRoutes);

// escuchar las peticiones
server.listen(4000, () => console.log('Server is running in http://localhost://4000'));

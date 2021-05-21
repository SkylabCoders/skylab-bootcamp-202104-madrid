// con qué creamos el servidor

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// crear el servidor

const server = express();

server.use(cors());

// cuando envias algo en el postman a través de body en formato json hay que:
server.use(express.json());

const heroesRoutes = require('./routes/heroRoutes');
const ramRoutes = require('./routes/ramRoutes');

server.use('/api/heroes', heroesRoutes);
server.use('/api/character', ramRoutes);
// definir las rutas dentro del servidor

// escuchar las peticiones
server.listen(4000, () => console.log('Server is running in http://localhost://4000'));

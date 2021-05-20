// con qué creamos el servidor:
// const EventEmiter = require('events');
const http = require('http');

// crear el servidor:
// const server = new EventEmiter();
const requestListener = (req, res) => {
  res.write('Acabas de hacer tu primer server!');
  res.end();
};
const server = http.createServer((requestListener));

// definir las rutas dentro del servidor:
// server.on('myevent', () => console.log('ha ocurrido un evento'));

// escuchar las peticiones:
// server.emit('myevent');
server.listen(4000, () => console.log('Server is running in http://localhost://4000'));

module.exports = {
  requestListener,
};

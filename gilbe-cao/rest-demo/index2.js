// Con qué creamos el servidor
const http = require('http');

// Crear el servidor
const requestListener = (req, res) => {
  res.end('Skylab mola, y en madrid mola más!');
};
const server = http.createServer(requestListener);

// Escuchar las peticiones
const listenCallback = () => console.log('Server is running in http://localhost:4000');
server.listen(4000, listenCallback);

module.exports = {
  requestListener,
  listenCallback,
};

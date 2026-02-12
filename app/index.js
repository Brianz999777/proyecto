const http = require('http');
const server = http.createServer((req, res) => {
  res.end('¡Hola! App desplegada con Ansible y GitHub Actions');
});
server.listen(3000, () => console.log('Servidor listo en puerto 3000'));
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('¡Hola! App desplegada con Ansible y GitHub Actions');
});
server.listen(80, () => console.log('Servidor listo en puerto 80'));
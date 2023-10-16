const http = require('http');

http.createServer(function(req, res) {
  console.log('nueva peticion');
  console.log(req.url);

  res.writeHead(201, { 'Content-Type': 'text/plain' })

    // escribir respuesta al usuario
    res.write('Hola Estoy usando Res.write  ')
    res.end('Hello World!');
}).listen(3000);

console.log('Escuchando el puerto 3000');
var http = require('http');

const server = http.createServer();

//create a server object:=http.createServer(); 

function onConnect(req, res){
  res.write('herllo world');
  res.write('sem houdt van kaas');
  res.end();
}

server.on('request', onConnect);

server.listen(8080);
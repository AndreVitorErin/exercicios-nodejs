const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html'); // envio de arquivos
});

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/html/sobre.html');
});

app.get('/blog', (req, res) => {
  res.send('bem-vindo ao meu blog!');
});

app.get('/ola/:nome/:cargo/:cor', (req, res) => {
  res.send(
    '<h1>Ola ' +
      req.params.nome +
      '</h1> <h2>Seu cargo é: ' +
      req.params.cargo +
      '</h2> <h3>Sua cor favorita é: ' +
      req.params.cor +
      '</h3>'
  );
}); // Rota com parâmetro

app.listen(8081, () => {
  console.log('Servidor rodando na url http://localhost:8081');
});

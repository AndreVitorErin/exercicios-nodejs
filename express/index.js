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

app.get(
  '/testeMultiMet',
  (_req, res, next) => {
    res.send('primeiro método');
    next();
  },
  (_req, _res) => {
    console.log('segundo metodo');
    _res.end();
  }
);

const callback1 = (req, res, next) => {
  res.send('Callback1');
  next();
};

const callback2 = (req, res, next) => {
  console.log('Callback2');
  res.end();
};

app.get('/texteMultiMetArray', [callback1, callback2]);

app.listen(8081, () => {
  console.log('Servidor rodando na url http://localhost:8081');
});

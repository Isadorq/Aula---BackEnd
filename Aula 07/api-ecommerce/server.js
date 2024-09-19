const express = require('express');

const app = express();

const port = 3000;

const dados = [];

app.use(express.json());
app.get('/', (req, res) => {
    res.send('API funciona!');
});

app.use(express.json());

app.post('/data', (req, res) => {
    const {nome, qtde, valor} = req.body;
    dados.push({nome, qtde, valor})
    res.send(`Nome do produto: ${nome}, Quantidade: ${idade}, Valor: ${valor}`);
});

app.get('/data', (req, res) => {
    res.json(dados);
});

app.post('/dataa', (req, res) => {
    const {login, senha} = req.body;
    dados.push({login, senha})
    res.send(`Login: ${login}, Senha: ${senha}`)
});

app.get('/dataa', (req, res) => {
    res.json(dados);
});

app.listen(port);
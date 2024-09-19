// Criando a variavel express 
const express = require('express');

// Cria uma instância do Express
const app = express();

// Define a porta onde a API vai rodar
const port = 3000;

// Lista dados para armazenar todos os dados cadastrados
const dados = [];

// Middleware para permitir que o servidor lide com requisições no formato JSON
app.use(express.json());

// Criação da rota GEt na raiz ('/') que responde com uma mensagem simples
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

app.post('/data', (req, res) => {
    // parse para envio dos dados
    const {nome, idade} = req.body;
    dados.push({nome, idade}) //adiciona na lista
    res.send(`Nome: ${nome}, idade: ${idade} cadastrados com sucesso`);
});

// método data para o endpoint data 
app.get('/data', (req, res) =>{
    const {nome, idade} = req.body
    //res.send(`Nome: ${nome} Idade: ${idade}`);
    //res.json(dados)
    res.json(dados)
});

// Inicia o servidor e define que ele deve rodar na porta especificada (3000)
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
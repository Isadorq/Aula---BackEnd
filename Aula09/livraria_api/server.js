const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// inicialização do app
const app = express()
app.use(cors())
app.use(express.json())

// conexão ao mongodb
mongoose.connect('mongodb+srv://isa:salsicha@biblioteca.jve9d.mongodb.net/?retryWrites=true&w=majority&appName=Biblioteca')
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err))

// importação das rotas
const booksRoutes = require('./routes/books')
app.use('/api/books', booksRoutes)

// definir a porta do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
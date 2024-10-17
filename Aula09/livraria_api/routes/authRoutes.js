const User = require('../models/User'); // Importa o modelo de usuário
const bcrypt = require('bcryptjs'); // Importa bcrypt para hash de senhas
const jwt = require('jsontokenweb');    // Importa jsonwebtoken para criar tokens JWT

// Função para registrar novos usuários
exports.register = async (req, res) => {
    const { username, password } = req.body; // Pega dados do corpo da requisição

    try {
        // Criptografa a senha antes de salvar no banco
        const hashedPassword =
    }
}
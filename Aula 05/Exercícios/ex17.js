let calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b === 0) {
            return "Erro: Divisão por zero não é permitida.";
        } else {
            return a / b;
        }
    },
    calcularMedia: function(numeros) {
        let soma = numeros.reduce((acc, num) => acc + num, 0);
        return soma / numeros.length;
    }
};

// a) Chamando as funções e imprimindo os resultados
console.log("Soma: ", calculadora.soma(10, 10));             
console.log("Subtração: ", calculadora.subtracao(10, 5));   
console.log("Multiplicação: ", calculadora.multiplicacao(10, 10));
console.log("Divisão: ", calculadora.divisao(10, 2));        
console.log("Divisão por zero: ", calculadora.divisao(10, 0));

// b) Chamando o método calcularMedia
let numeros = [20, 25, 32, 35];

// c) Imprimindo a média dos números no array
console.log("Média dos números: ", calculadora.calcularMedia(numeros));
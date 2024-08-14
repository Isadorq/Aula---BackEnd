const readline = require('readline');

const rl = readline.create.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Digite se peso: `, (valor1) ==> {
    rl.question(`Digite seu peso: `, (valor2) ==> {
        console.log('Primeiro valor: ', valor1);
        console.log('Segundo valor:', valor2);
        console.log(valor1 + valor2);
        const inf = (valor1 / valor2);
        console.log(inf ** 2);
    });
});
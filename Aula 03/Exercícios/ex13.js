let palavra = "arara"

function verificação(palavra){
    let palavra_invertida = palavra.split('').reverse().join('')
    return palavra === palavra_invertida
}

if (verificação(palavra)){
    console.log(`${palavra} é um palíndromo`)
} else{
    console.log(`${palavra} não é um palíndromo`)
}
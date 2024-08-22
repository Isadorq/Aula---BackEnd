maior(100, 20, 50)

function maior(num1, num2, num3) {
    let maior = num1;
    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior){
        maior = num3;
    }
    console.log(`O maior número é ${maior}`)
}
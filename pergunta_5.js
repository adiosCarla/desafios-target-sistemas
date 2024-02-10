stringInvertida = "";
let string = prompt("Digite uma palavra ou frase para ser invertida:");

for (let i = 0; i < string.length; i++) {
    stringInvertida = string[i] + stringInvertida;
}

alert(`A string que você digitou invertida fica: ${stringInvertida}`);
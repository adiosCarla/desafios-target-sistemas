stringInvertida = "";
let string = prompt("Digite uma palavra ou frase para ser invertida:");

for (i in string) {
    stringInvertida = string[i] + stringInvertida;
}

alert(`A string que você digitou invertida fica: ${stringInvertida}`);

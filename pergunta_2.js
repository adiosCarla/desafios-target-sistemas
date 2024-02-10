let fibonacci = [];
numInput = prompt("Digite um número positivo:");

let a = -1, b = 1, c = 0;
let x = -1, y = 1, z = 0;

while (c < numInput) {
    c = a + b;
    a = b;
    b = c;
}

if (c == numInput) {
    alert(`O número ${numInput} pertence a sequência fibonacci.`);
} else {
    alert(`O número ${numInput} não pertence a sequência fibonacci.`);
}

for (let i = 0; i < 15; i++) {
    z = x + y;
    x = y;
    y = z;
    fibonacci.push(z);
}

alert(fibonacci);
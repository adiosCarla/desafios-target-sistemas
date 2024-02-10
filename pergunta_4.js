let sp = 67.83643;
let rj = 36.67866;
let mg = 29.22988;
let es = 27.16548;
let outros = 19.84953;
let total = sp + rj + mg + es + outros;

let porcentagemSP = ((sp/total)*100);
let porcentagemRJ = ((rj/total)*100);
let porcentagemMG = ((mg/total)*100);
let porcentagemES = ((es/total)*100);
let porcentagemOutros = ((outros/total)*100);

console.log(`O percentual de representação que SP teve é de: ${porcentagemSP.toFixed(2)}%`);
console.log(`O percentual de representação que RJ teve é de: ${porcentagemRJ.toFixed(2)}%`);
console.log(`O percentual de representação que MG teve é de: ${porcentagemMG.toFixed(2)}%`);
console.log(`O percentual de representação que ES teve é de: ${porcentagemES.toFixed(2)}%`);
console.log(`O percentual de representação que outros teve é de: ${porcentagemOutros.toFixed(2)}%`);
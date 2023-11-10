// 4. Arrays e estruturas de repetição while, do/while, for, for/in e for/of;

const executar = true;
const nomes = ["João", "Pedro", "Paulo", "Tiago", "Ana", "Maria"];

let contador = 0;
console.log("\nRepetição utilizando while:");
while (contador < nomes.length && executar) {
  console.log(nomes[contador]);
  contador++;
}

contador = 0;
console.log("\nRepetição utilizando do/while:");
do {
  console.log(nomes[contador]);
  contador++;
} while (contador < nomes.length && executar);

console.log("\nRepetição utilizando for convencional:");
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log("\nRepetição utilizando for/in:");
for (i in nomes) {
  console.log(nomes[i]);
}

console.log("\nRepetição utilizando for/of:");
for (nome of nomes) {
  console.log(nome);
}

for (var i = 0; i < nomes.length; i++) {
  var nome = nomes[i];
  console.log(nome);
}

for (i in nomes) {
  console.log(nomes[i]);
}

for (nome of nomes) {
  console.log(nome);
}

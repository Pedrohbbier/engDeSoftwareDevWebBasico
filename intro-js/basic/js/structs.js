// 3. Estruturas relacionais (==, !=, <, >, <=, >=), lógicas (!, &&, ||),
// unárias (++, --), de decisão if/else, ternárias e switch;

let a = 10;
let b = 5;

console.log("a == b: " + (a == b));
console.log("a > b: " + (a > b));
console.log("a <= b: " + (a > b));

if (a == b) {
  console.log("A é igual a B!");
} else {
  console.log("A é diferente B!");
}

let mensagem = a != b ? "A é diferente B!" : "A é igual a B!";
console.log(mensagem);

const dias = [2, 3, 4, 5, 6];
switch (dias[9]) {
  case 2:
    console.log("Segunda-feira!");
    break;
  case 3:
    console.log("Terça-feira!");
    break;
  case 4:
    console.log("Quarta-feira!");
    break;
  case 5:
    console.log("Quinta-feira!");
    break;
  case 6:
    console.log("Sexta-feira!");
    break;
  default:
    console.log("É final de semana!");
    break;
}

// 1. Variáveis var, let, const (tipos: string, number, boolean)

var numero = 100;
//let numero = 100;
//const numero = 100;

numero = 99;
numero = "dez";
numero = true;
console.log(numero);

const number = 42;
try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const `number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42

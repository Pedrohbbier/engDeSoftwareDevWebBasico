// 5. Funções convencionais e seta.

function somar(a, b) {
  return a + b;
}

const x = somar(45, 20);
console.log("Valor de X: " + x);

console.log(somar(10, 5));

function subtrair(a, b) {
  return a - b;
}

const somarSeta = (a, b) => a + b;

var result = somarSeta(10, 5);
console.log(result);

//console.log(((a, b) => a + b)(10, 5));

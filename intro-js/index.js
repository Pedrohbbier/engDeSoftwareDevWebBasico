const pai = document.getElementById("pai");
const btn = document.getElementById("btn");
btn.addEventListener("click", funcExecute);

function funcExecute() {
  for (i = 0; i < 100; i++) {
    console.log("Função executada!" + i);
    const p = document.createElement("p");
  }
}

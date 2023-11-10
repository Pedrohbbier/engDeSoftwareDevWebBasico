const divConteiner = document.getElementById("conteiner")
const btn = document.getElementById("btn")
btn.addEventListener("click", funcExecute)

function funcExecute() {
  const divCriada = document.createElement("div")
  divCriada.innerHTML = "Div criada no html"
  console.log(divCriada)
  divConteiner.appendChild (divCriada)

  const primeiroFilho = divConteiner.firstElementChild
  const segundoFilho = primeiroFilho.nextElementSibling
  const terceiroFilho = segundoFilho.nextElementSibling

  console.log(primeiroFilho)
  console.log(segundoFilho)
  console.log(terceiroFilho)
  
}

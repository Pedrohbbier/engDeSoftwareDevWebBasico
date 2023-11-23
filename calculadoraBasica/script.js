let n1 = document.querySelector("#n1")
let n2 = document.querySelector("#n2")

let somar = document.querySelector("#somar")
let subtrair = document.querySelector("#subtrair")
let multiplicar = document.querySelector("#multiplicar")
let dividir = document.querySelector("#dividir")
let resEscrita = document.querySelector("#resEscrita")
let res;

somar.addEventListener("click" , ()=>{
    res = parseFloat(n1.value) + parseFloat(n2.value)
    resEscrita.innerHTML = res
})

subtrair.addEventListener("click" , ()=>{
    res = parseFloat(n1.value) - parseFloat(n2.value)
    resEscrita.innerHTML = res
})

multiplicar.addEventListener("click" , ()=>{
    res = parseFloat(n1.value) * parseFloat(n2.value)
    resEscrita.innerHTML = res
})

dividir.addEventListener("click" , ()=>{
    res = parseFloat(n1.value) / parseFloat(n2.value)
    resEscrita.innerHTML = res
})
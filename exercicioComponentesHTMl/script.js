const btn1 = document.getElementById("btn1");
      btn1.addEventListener("click", ()=>{
        
        const inputName = document.getElementById("name");
        inputName.value = "Valor alterado!";

        const inputMail = document.getElementById("email")
        inputMail.value = "Valor alterado!"

        const website = document.getElementById("website")
        website.value = "Valor alterado!"

        const numero = document.getElementById("number")
        numero.value = "10"

        const nascimento = document.getElementById("birthday")
        nascimento.value = "2000-10-10"

        const hora = document.getElementById("time")
        hora.value =  "20:10"

        const telefone = document.getElementById("phone")
        telefone.value = "4199995299"

        const corAzul = document.getElementById("blue")
        corAzul.checked = true;

        const corVermelha = document.getElementById("red") 
        corVermelha.checked = false;

        const carne = document.getElementById("curry")
        carne.checked = true;

        const sopa = document.getElementById("soup")
        sopa.checked = false;

        const nivelConbustivel = document.getElementById("fuel")
        nivelConbustivel.value = 30

        const progresso = document.getElementById("file")
        progresso.value = 90

        const pizza = document.getElementById("pizza1")
        pizza.value = "bacon";

        const pizza2 = document.getElementById("pizza2")
        pizza2.value = "calabresa"

        const sabor = document.getElementById("ice-cream-choice")
        sabor.value = "Morango"

        const poema = document.getElementById("poem")
        poema.value = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nobis aut cumque porro voluptatum totam dignissimos vel neque, laboriosam sequi impedit commodi a natus voluptates sed tempore eveniet id"


        const cor = document.getElementById("color")
        cor.value = "#0000ff"

        const senha = document.getElementById('password')
        senha.value = "wdahfiuahwf"

        const busca = document.getElementById("search")
        busca.value = "pizza"
      })
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", ()=>{


        const inputName = document.getElementById("name");
        const labelName = inputName.previousElementSibling;

        const inputMail = document.getElementById("email");
        const labelMail = inputMail.previousElementSibling;

        const inputWebsite = document.getElementById("website")
        const labelWebsite = inputWebsite.previousElementSibling

        const inputNumero = document.getElementById("number")
        const labelNumero = inputNumero.previousElementSibling

        const inputNascimento = document.getElementById("birthday")
        const labelNascimento = inputNascimento.previousElementSibling

        const inputHora = document.getElementById("time")
        const labelHora = inputHora.previousElementSibling

        const inputTelefone = document.getElementById("phone")
        const labelTelefone = inputTelefone.previousElementSibling

        const tabelaCor = document.getElementById("tabelaCor")

        const tabelaComida = document.getElementById("tabelaComida")

        const labelFuel = document.getElementById("labelFuel")
        const fuel = document.getElementById("fuel")

        const file = document.getElementById("file")
        const labelFiel = file.previousElementSibling

        const pizza1 = document.getElementById("pizza1")
        const labelPizza = pizza1.previousElementSibling
        const pizza2 = document.getElementById("pizza2")

        const sabor = document.getElementById("ice-cream-choice")
        const labelSabor = sabor.previousElementSibling

        const poema = document.getElementById("poem")
        const labelPoema = poema.previousElementSibling

        const cor = document.getElementById("color")
        const labelColor = cor.previousElementSibling

        const arquivo = document.getElementById("resume")
        const labelArquivo = arquivo.previousElementSibling

        const senha = document.getElementById("password")
        const labelSenha = senha.previousElementSibling

        const range123 = document.getElementById("range123")

        const busca = document.getElementById("search")
        const labelBusca = busca.previousElementSibling

        const limpar = document.getElementById("limpar")

        const btnA = document.getElementById("btnA")

        const img = document.getElementById("img")

        const submitB = document.getElementById("submitB")

        const submit = document.getElementById("submit")


        const form2 = document.getElementById("form2");
        form2.innerHTML = "";



        form2.appendChild(labelName.cloneNode(true));
        form2.appendChild(inputName.cloneNode(true));

        form2.appendChild(labelMail.cloneNode(true));
        form2.appendChild(inputMail.cloneNode(true))

        form2.appendChild(labelWebsite.cloneNode(true))
        form2.appendChild(inputWebsite.cloneNode(true))

        form2.appendChild(labelNumero.cloneNode(true))
        form2.appendChild(inputNumero.cloneNode(true))

        form2.appendChild(labelNascimento.cloneNode(true))
        form2.appendChild(inputNascimento.cloneNode(true))

        form2.appendChild(labelHora.cloneNode(true))
        form2.appendChild(inputHora.cloneNode(true))

        form2.appendChild(labelTelefone.cloneNode(true))
        form2.appendChild(inputTelefone.cloneNode(true))

        form2.appendChild(tabelaCor.cloneNode(true))

        form2.appendChild(tabelaComida.cloneNode(true))

        form2.appendChild(labelFuel.cloneNode(true))
        form2.appendChild(fuel.cloneNode(true))

        form2.appendChild(labelFiel.cloneNode(true))
        form2.appendChild(file.cloneNode(true))

        form2.appendChild(labelPizza.cloneNode(true))
        form2.appendChild(pizza1.cloneNode(true))
        form2.appendChild(pizza2.cloneNode(true))

        form2.appendChild(labelSabor.cloneNode(true))
        form2.appendChild(sabor.cloneNode(true))

        form2.appendChild(labelPoema.cloneNode(true))
        form2.appendChild(poema.cloneNode(true))

        form2.appendChild(labelColor.cloneNode(true))
        form2.appendChild(cor.cloneNode(true))

        form2.appendChild(labelArquivo.cloneNode(true))
        form2.appendChild(arquivo.cloneNode(true))

        form2.appendChild(labelSenha.cloneNode(true))
        form2.appendChild(senha.cloneNode(true))

        form2.appendChild(range123.cloneNode(true))

        form2.appendChild(labelBusca.cloneNode(true))
        form2.appendChild(busca.cloneNode(true))

        form2.appendChild(limpar.cloneNode(true))

        form2.appendChild(btnA.cloneNode(true))

        form2.appendChild(img.cloneNode(true))

        form2.appendChild(submitB.cloneNode(true))

        form2.appendChild(submit.cloneNode(true))
      })

      const btn3 = document.getElementById("btn3");
      btn3.addEventListener("click", ()=>{
        //alert("Clicado no btn criar componentes!");

        const form3 = document.getElementById("form3");
        form3.innerHTML = "";

        const lblName = document.createElement("label");
        lblName.textContent = "Label nome criada";

        form3.appendChild(lblName);

        const inputName = document.createElement("input");
        form3.appendChild(inputName);

      })
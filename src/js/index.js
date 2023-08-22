import "./libs"
const inputNome = 
document.querySelector('#input-nome')
const selectPrioridade = 
document.querySelector('#select-prioridade')
const btnIncluir = 
document.querySelector('#btn-incluir')
const ulLista = 
document.querySelector('#ul-lista')
const displayNome = 
document.querySelector('#display-nome')
const btnChamar = 
document.querySelector('#btn-chamar')
const listaDeAtendimento = new Array()


function incluir(){
    listaDeAtendimento.push(inputNome.value)
    listar()
}

function listar(){
  for (let nome of listaDeAtendimento){
    console.log(nome) 
  }
}
//eventos
btnIncluir.onclick = incluir 


const mainContainer = document.getElementById("main-container")
const listaTarefas = document.getElementById("lista-tarefas")


function criarTarefas(){

    const criadorTrf = document.createElement("div")
    criadorTrf.innerHTML = `
    
    <p>oi</p>

    `

    mainContainer.appendChild(criadorTrf)
    mainContainer.insertBefore(criadorTrf, listaTarefas)
    
}

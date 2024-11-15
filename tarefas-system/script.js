const contentContainer = document.getElementById("content-container")
const listaTarefas = document.getElementById("lista-tarefas")


function criarTarefas(){

    if(!criadorTrf){
        const criadorTrf = document.createElement("div")
        criadorTrf.innerHTML = `
        
        <p>oi</p>

        `

        contentContainer.insertBefore(criadorTrf, listaTarefas)
    }

    
}

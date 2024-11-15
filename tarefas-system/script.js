const contentContainer = document.getElementById("content-container")
const listaTarefas = document.getElementById("lista-tarefas")


function criarTarefas(){

    let criadorTrf = document.getElementById("criador-trf")

    if(!criadorTrf){

        criadorTrf = document.createElement("div")
        criadorTrf.innerHTML = `
        
        <p>oi</p>

        `

        criadorTrf.id = "criador-trf"
        contentContainer.insertBefore(criadorTrf, listaTarefas)
    } 

    
}

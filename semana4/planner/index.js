const lista = document.getElementsByTagName("li")
const novaTarefa = document.getElementById ("nova-tarefa")
const diaDaSemana = document.getElementById ("dia-da-semana")
const hora = document.getElementById ("hora")
const conteudo = document.getElementsByClassName("conteudo")

function adicionarItem () {
    if (novaTarefa.value === " " || novaTarefa.value === "") {
        alert ("Informe o valor antes de tentar criar a tarefa")
    } else {
        switch (diaDaSemana.value) {
            case 'domingo': {
                document.getElementById("domingo").innerHTML += "<li onclick = 'riscado(this)'>"
                 + hora.value + " " + novaTarefa.value + "</li>"
                break
            }
            case 'segunda': {
                document.getElementById("segunda").innerHTML += "<li onclick = 'riscado(this)'>" 
                + hora.value + " " + novaTarefa.value + "</li>"
                break
            }
            case 'terca': {
                document.getElementById("terca").innerHTML += "<li onclick = 'riscado(this)'>" 
                + hora.value + " " + novaTarefa.value + "</li>"
                break
            }
            case 'quarta': {
                document.getElementById("quarta").innerHTML += "<li onclick = 'riscado(this)'>" 
                + hora.value + " " + novaTarefa.value + "</li>"
                break
            }
            case 'quinta': {
                document.getElementById("quinta").innerHTML += "<li onclick = 'riscado(this)'>"
                 + hora.value + " " + novaTarefa.value  + "</li>"
                break
            }
            case 'sexta': {
                document.getElementById("sexta").innerHTML += "<li onclick = 'riscado(this)'>" 
                + hora.value + " " + novaTarefa.value + "</li>"
                break
            }
            case 'sabado': {
                document.getElementById("sabado").innerHTML += "<li onclick = 'riscado(this)'>" 
                + hora.value + " " + novaTarefa.value  + "</li>"
                break
            }
        }
        hora.value = "01:00"
        novaTarefa.value = " "
    }
}

function riscado(parametro){
    parametro.style.textDecoration = "line-through";
}

function limpar() {
    for (let i = 0; i < conteudo.length; i++) {
        for (let index = 0; index < lista.length; index++) {
            lista[index].remove()
        }
    }
}
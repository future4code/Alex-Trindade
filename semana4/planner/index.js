function adicionarItem () {
    const novaTarefa = document.getElementById ("nova-tarefa")
    const diaDaSemana = document.getElementById ("dia-da-semana").value

    if (novaTarefa.value === " " || novaTarefa.value === "") {
        alert ("Informe o valor antes de tentar criar a tarefa")
    } else {
        switch (diaDaSemana) {
            case 'domingo': {
                document.getElementById("domingo").innerHTML += "<li>" + novaTarefa.value + "</li>"
                break
            }
            case 'segunda': {
                document.getElementById("segunda").innerHTML += "<li>" + novaTarefa.value + "</li>"
                break
            }
            case 'terca': {
                document.getElementById("terca").innerHTML += "<li>" + novaTarefa.value + "</li>"
                break
            }
            case 'quarta': {
                document.getElementById("quarta").innerHTML += "<li>" + novaTarefa.value + "</li>"
                break
            }
            case 'quinta': {
                document.getElementById("quinta").innerHTML += "<li>" + novaTarefa.value + "</li>"
                break
            }
            case 'sexta': {
                document.getElementById("sexta").innerHTML += "<li>" + novaTarefa.value + "</li>"
                break
            }
            case 'sabado': {
                document.getElementById("sabado").innerHTML += "<li>" + novaTarefa.value + "</li>"
                break
            }
        }
        novaTarefa.value = " "
    }
}
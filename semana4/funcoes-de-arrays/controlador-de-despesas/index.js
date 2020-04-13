class cadastro {
    constructor (valorDespesa, tipo, descricao) {
        this.valorDespesa = valorDespesa
        this.tipo = tipo
        this.descricao = descricao
    }
}

let cadastroDespesa = []

function cadastrar () {
    const valorDespesa = document.getElementById ("valor")
    const descricao = document.getElementById ("descricao")
    const tipo = document.getElementById ("tipo")
    const novoCadastro = new cadastro (valorDespesa.value, descricao.value, tipo.value)
    cadastroDespesa.push (novoCadastro)
    valorDespesa.value = ""
    descricao.value = ""
    tipo.value = "selecione"
}
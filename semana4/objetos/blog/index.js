const post = {
    titulo: document.getElementById("titulo").value,
    autor: document.getElementById("autor").value,
    texto: document.getElementById("texto").value
}
const conteudo = document.getElementById("conteudo")


function postar(ev) {
    const postCopia = post
    const postagens = []

    postagens.push(post)
    conteudo.innerHTML = "<h3>" + postagens + "</h3>"
}

post.titulo = ""
post.autor = ""
post.texto = ""
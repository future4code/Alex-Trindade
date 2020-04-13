/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 /* Fiz de várias maneiras mas ainda tem um erro e não consegui entender o problema na minha
 lógica*/

let rodar = true

while (rodar) {
   if (confirm("Quer iniciar uma nova rodada?")) {
      let vetorUsuario = [comprarCarta(), comprarCarta()]
      let vetorComputador = [comprarCarta(), comprarCarta()]
      let cartasUsuario = vetorUsuario[0].texto + " " + vetorUsuario[1].texto
      let cartasComputador = vetorComputador[0].texto
      let pontuacaoUsuario = vetorUsuario[0].valor + vetorUsuario[1].valor
      let pontuacaoComputador = vetorComputador[0].valor + vetorComputador[1].valor

      if (pontuacaoUsuario > 21 || pontuacaoComputador > 21) {
         vetorUsuario = [comprarCarta(), comprarCarta()]
         vetorComputador = [comprarCarta(), comprarCarta()]
         cartasUsuario = vetorUsuario[0].texto + " " + vetorUsuario[1].texto
         cartasComputador = vetorComputador[0].texto
         pontuacaoUsuario = vetorUsuario[0].valor + vetorUsuario[1].valor
         pontuacaoComputador = vetorComputador[0].valor + vetorComputador[1].valor
      }


      let i = 2

      if (confirm("Suas cartas são " + cartasUsuario + ". A carta revelada do computador é " +
         cartasComputador + ".\nDeseja comprar mais uma carta?")) {

         while (pontuacaoUsuario < 21) {
            vetorUsuario.push(comprarCarta())
            cartasUsuario += " " + vetorUsuario[i].texto
            pontuacaoUsuario += vetorUsuario[i].valor
            i++
         }

         cartasComputador += " " + vetorComputador[1].texto

         if (pontuacaoUsuario > 21 || (pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador <= 21)) {
            alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
               "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
               pontuacaoComputador + ".\nO computador ganhou!")
         } else if ((pontuacaoComputador > 21 && pontuacaoUsuario <= 21) || pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario <= 21) {
            alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
               "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
               pontuacaoComputador + ".\nO usuário ganhou!")
         } else {
            alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
               "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
               pontuacaoComputador + ".\nEmpate!")
         }
      } else {
         let indice = 2
         cartasComputador += " " + vetorComputador[1].texto
         while (pontuacaoComputador <= pontuacaoUsuario) {
            vetorComputador.push(comprarCarta())
            cartasComputador += " " + vetorComputador[indice].texto
            pontuacaoComputador += vetorComputador[indice].valor
            indice++
         }
         if (pontuacaoUsuario > 21 || (pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador <= 21)) {
            alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
               "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
               pontuacaoComputador + ".\nO computador ganhou!")
         } else if ((pontuacaoComputador > 21 && pontuacaoUsuario <= 21) || pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario <= 21) {
            alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
               "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
               pontuacaoComputador + ".\nO usuário ganhou!")
         } else {
            alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
               "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
               pontuacaoComputador + ".\nEmpate!")
         }
      }

      /* Essa foi a primeira maneira que fiz
      
      let i = 2

      while (pontuacaoUsuario < 21) {
         if (confirm("Suas cartas são " + cartasUsuario + ". A carta revelada do computador é " +
            cartasComputador + ".\nDeseja comprar mais uma carta?")) {
            vetorUsuario.push(comprarCarta())
            cartasUsuario += " " + vetorUsuario[i].texto
            pontuacaoUsuario += vetorUsuario[i].valor
         } else {
            let indice = 2
            cartasComputador += " " + vetorComputador[1].texto
            while (pontuacaoComputador <= pontuacaoUsuario) {
               vetorComputador.push(comprarCarta())
               cartasComputador += " " + vetorComputador[indice].texto
               pontuacaoComputador += vetorComputador[indice].valor
               indice++
            }
            if (pontuacaoUsuario > 21 || (pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador <= 21)) {
               alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
                  "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
                  pontuacaoComputador + ".\nO computador ganhou!")
            } else if ((pontuacaoComputador > 21 && pontuacaoUsuario <= 21) || pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario <= 21) {
               alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
                  "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
                  pontuacaoComputador + ".\nO usuário ganhou!")
            } else {
               alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
                  "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
                  pontuacaoComputador + ".\nEmpate!")
            }
         }
         i++
      }
      
      cartasComputador += " " + vetorComputador[1].texto

      if (pontuacaoUsuario > 21 || (pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador <= 21)) {
         alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
            "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
            pontuacaoComputador + ".\nO computador ganhou!")
      } else if ((pontuacaoComputador > 21 && pontuacaoUsuario <= 21) || pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario <= 21) {
         alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
            "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
            pontuacaoComputador + ".\nO usuário ganhou!")
      } else {
         alert("Suas cartas são " + cartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ".\n" +
            "As cartas do computador são " + cartasComputador + ". A pontuação do computador é " +
            pontuacaoComputador + ".\nEmpate!")
      }*/

   } else {
      console.log("O jogo acabou.")
      rodar = false
   }
}
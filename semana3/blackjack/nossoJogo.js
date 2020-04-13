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

 console.log ("Bem vindo ao jogo de Blackjack!")

 if (confirm ("Quer iniciar uma nova rodada?")){
    let cartasUsuario = [comprarCarta(), comprarCarta()]
    let cartasComputador = [comprarCarta(), comprarCarta()]
    let pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
    let pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor

    console.log ("Usuário - cartas: " + cartasUsuario[0].texto + " " + cartasUsuario[1].texto + " - pontuação: " + pontuacaoUsuario)
    console.log ("Computador - cartas: " + cartasComputador[0].texto + " " + cartasComputador[1].texto + " - pontuação: " + pontuacaoComputador)
    
    if ((pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario <= 21) || 
    (pontuacaoUsuario > 21 && pontuacaoUsuario < pontuacaoCompuator)) {
       console.log ("O usuário ganhou!")
    } else if ((pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador <= 21) || 
    (pontuacaoComputador > 21 && pontuacaoCompuator < pontuacaoUsuario)) {
      console.log ("O computador ganhou!")
    } else{
      console.log ("Empate!")
    }
 } else {
    console.log ("O jogo acabou.")
 }
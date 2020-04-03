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

if (confirm ("Quer iniciar uma nova rodada?")) {
   let cartasUsuario = [comprarCarta(), comprarCarta()]
   let cartasComputador = [comprarCarta(), comprarCarta()]
   let pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   let pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor

   if (pontuacaoUsuario > 21 || pontuacaoComputador > 21) {
      for (let i = 0; i < cartasUsuario.length; i++) {
         cartasUsuario[i] = comprarCarta()
      }
      for (let i = 0; i < cartasComputador.length; i++) {
         cartasComputador[i] = comprarCarta
      }
   } else {
      confirm("Suas cartas são " + )
   }

} else {
   console.log ("O jogo acabou.")
}
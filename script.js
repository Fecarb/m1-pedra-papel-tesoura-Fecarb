console.log ("DEUS VULT!")


    const playRockPaperScissor = "resultado"

    

    if (player1=== "Pedra" && player2 === "Tesoura" || player1 === "Papel" && player2 === "Pedra"
        || player1 === "Tesoura" && player2 === "Papel" 
    ){
        return "Jogador 1 venceu!"

    } else if ( player1 === player2){
        return "Empate!"
    }else {
        return "Jogador 2 venceu!" 
    }
      
}

const resultado = playRockPaperScissor("Tesoura", "Pedra");
console.log(resultado)



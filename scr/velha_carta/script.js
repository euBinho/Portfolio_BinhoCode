alert(`Jogo da Velha/Carta:\n\nX = ♥\nO = ♣\n\nComece jogando em um numero`) //Começo do Jogo
        var proximaJogada = "♥"
        var cont = 0
        var x = 0
      

        function verificarVencedor() //verifica se tem vencedor 
        {
            var b1 = document.getElementById('botao1').innerText
            var b2 = document.getElementById('botao2').innerText
            var b3 = document.getElementById('botao3').innerText
            var b4 = document.getElementById('botao4').innerText
            var b5 = document.getElementById('botao5').innerText
            var b6 = document.getElementById('botao6').innerText
            var b7 = document.getElementById('botao7').innerText
            var b8 = document.getElementById('botao8').innerText
            var b9 = document.getElementById('botao9').innerText
            if (b1 == b2 && b2 == b3) {
                alert(`"${b1}" GANHOU`)
                x=1
                reset()
            }
            if (b4 == b5 && b5 == b6) {
                alert(`"${b4}" GANHOU`)
                x=1
                reset()
            }
            if (b7 == b8 && b8 == b9) {
                alert(`"${b7}" GANHOU`)
                x=1
                reset()
            }
            if (b1 == b4 && b4 == b7) {
                alert(`"${b1}" GANHOU`)
                x=1
                reset()
            }
            if (b2 == b5 && b5 == b8) {
                alert(`"${b2}" GANHOU`)
                x=1
                reset()
            }
            if (b3 == b6 && b6 == b9) {
                alert(`"${b3}" GANHOU`)
                x=1
                reset()
            }
            if (b1 == b5 && b5 == b9) {
                alert(`"${b1}" GANHOU`)
                x=1
                reset()
            }
            if (b3 == b5 && b5 == b7) {
                alert(`"${b3}" GANHOU`)
                x=1
                reset()
            }
        }
        

        function clica(botao) //click em cada butão
        {
            cont++
            var identificador = 'botao' + botao
            console.log(identificador)
            document.getElementById(identificador).innerText = proximaJogada
            {
                document.getElementById(identificador).innerText = proximaJogada
                    if (proximaJogada == `♥`) {
                        document.getElementById(identificador).disabled = true
                        proximaJogada = '♠'
                    } 
                    else 
                    {
                        document.getElementById(identificador).disabled = true
                        proximaJogada = '♥'
                    } 
                    verificarVencedor()
                    
                    if (cont == 9 && x == 0) {
                        alert("Empate!!!")
                        reset()
                    }
                    
                
            }
            
        }

        function reset() //reiciar
        {
            document.getElementById("botao1").disabled = false
            document.getElementById("botao2").disabled = false
            document.getElementById("botao3").disabled = false
            document.getElementById("botao4").disabled = false
            document.getElementById("botao5").disabled = false
            document.getElementById("botao6").disabled = false
            document.getElementById("botao7").disabled = false
            document.getElementById("botao8").disabled = false
            document.getElementById("botao9").disabled = false
            
            

            document.getElementById("botao1").innerHTML = `1`
            document.getElementById("botao2").innerHTML = `2`
            document.getElementById("botao3").innerHTML = `3`
            document.getElementById("botao4").innerHTML = `4`
            document.getElementById("botao5").innerHTML = `5`
            document.getElementById("botao6").innerHTML = `6`
            document.getElementById("botao7").innerHTML = `7`
            document.getElementById("botao8").innerHTML = `8`
            document.getElementById("botao9").innerHTML = `9`
            cont = 0
            x = 0

        }
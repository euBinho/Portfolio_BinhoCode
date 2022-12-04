var numero
        var entrada = document.getElementById("inpentrada")
        var cont = Number(0)
        function pvp()
        {
            document.getElementById("idnot").style="display: inline;"
            document.getElementById("inppvp").style="display: inline;"
            document.getElementById("idproximo1").style="display: inline;"
            document.getElementById("inppvp").style="display: inline;"
            document.getElementById("info3").style="display: none;"
            document.getElementById("info2").style="display: none;"
            reset()
        }
        function proximo1()
        {
            document.getElementById('idnot1').style="display: inline;"
            document.getElementById('proxpvp').style="display: inline;"
            document.getElementById("idnot").style="display: none;"
            document.getElementById("inppvp").style="display: none;"
            document.getElementById("idproximo1").style="display: none;"
            document.getElementById('inpentrada').style="display: inline;"
            

        }
        function proxpvp()
        {
            cont++
            var entrada = document.getElementById("inpentrada")
            // entrada=Number(entrada)
            var pvp1 = document.getElementById("inppvp")
            console.log(entrada.value)
            if(entrada.value==pvp1.value)
            {
                alert(`Parabéns\nVocê acertou o numero do seu oponente na ${cont}° tentativa!`)
                location.reload()
            }
            else if(entrada.value>pvp1.value)
            {
                document.getElementById("divsaida").innerHTML=`Seu numero é muito alto...<br>Tente outro numero!`
                
            }
            else if(entrada.value<pvp1.value)
            {
                document.getElementById("divsaida").innerHTML=`Seu numero é muito baixo...<br>Tente outro numero!`
            }
            document.getElementById("divsaida1").innerText=`Tentativa N°${cont} errada!`
        }
        function facil()
        {
            numero = Math.floor(Math.random()*10)+1
            console.log(numero)
            document.getElementById('msnfacil').style='display: inline;'
            document.getElementById('inpentrada').style="display: inline;"
            
            document.getElementById('idproximo').style="display: inline;"
            document.getElementById("info3").style="display: none;"
            document.getElementById("info2").style="display: none;"
            reset()
        }
        
        function medio()
        {
            numero = Math.floor(Math.random()*100)+1
            document.getElementById('msnmedio').style='display: inline;'
            console.log(numero)
            document.getElementById('inpentrada').style="display: inline;"
            
            document.getElementById('idproximo').style="display: inline;"
            document.getElementById("info3").style="display: none;"
            document.getElementById("info2").style="display: none;"
            reset()
        }

        function dificil()
        {
            numero = Math.floor(Math.random()*1000)+1
            console.log(numero)
            document.getElementById('msndificil').style='display: inline;'
            document.getElementById('inpentrada').style="display: inline;"
            
            document.getElementById('idproximo').style="display: inline;"
            document.getElementById("info3").style="display: none;"
            document.getElementById("info2").style="display: none;"
            reset()
        }
        function rec()
        {
            location.reload()
        }
        function proximo()
        {
            cont++
            console.log(cont)
            if(entrada.value==numero)
            {
                alert(`Parabéns, vocè acertou o Numero Mágico na ${cont}° tentativa`)
                rec()
                // document.getElementById('divsaida').innerHTML=`Parabéns, vocè acertou o Numero Mágico na ${cont}° tentativa`
            }
            else if(entrada.value>numero)
            {
                document.getElementById('divsaida').innerHTML=`Seu numero é muito alto...<br>Tente outro numero menor!<br><label>Tentativa N°: ${cont}</label>`   
            }
            else if(entrada.value<numero)
            {
                document.getElementById('divsaida').innerHTML=`Seu numero é muito baixo...<br>Tente outro numero maior!`
            }
            document.getElementById("divsaida1").innerText=`Tentativa N°${cont} errada!`
        }
        function reset()
        {
            document.getElementById('idfacil').style='display: none;'
            document.getElementById('idmedio').style='display: none;'
            document.getElementById('iddificil').style='display: none;'
            document.getElementById('idpvp').style='display: none'
        }
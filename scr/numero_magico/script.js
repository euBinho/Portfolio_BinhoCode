let numeroSecreto;
let contadorTentativas = 0;
const entrada = document.getElementById("inpentrada");
const inppvp = document.getElementById("inppvp");
const gameInterface = document.getElementById("game-interface");
const gameInstruction = document.getElementById("game-instruction");
const divSaida = document.getElementById("divsaida");
const divSaida1 = document.getElementById("divsaida1");

// Adiciona os event listeners uma única vez
document
  .getElementById("idproximo")
  .addEventListener("click", verificarPalpite);
document.getElementById("proxpvp").addEventListener("click", proxpvp);
document.getElementById("idreset").addEventListener("click", resetGame);

function resetInterface() {
  entrada.style.display = "none";
  inppvp.style.display = "none";
  document.getElementById("idproximo").style.display = "none";
  document.getElementById("idproximo1").style.display = "none";
  document.getElementById("proxpvp").style.display = "none";
  document.getElementById("idreset").style.display = "none";
  divSaida.innerHTML = "";
  divSaida1.textContent = "";
  entrada.disabled = false; // Reabilita o campo de entrada
}

function iniciarJogo(modo, max) {
  numeroSecreto = Math.floor(Math.random() * max) + 1;
  console.log(`Número mágico (${modo}): ${numeroSecreto}`); // Registra no console
  gameInstruction.textContent = `Modo ${modo}: Chute um número de 0 a ${max}!`;
  entrada.style.display = "inline";
  document.getElementById("idproximo").style.display = "inline";
  document.getElementById("idreset").style.display = "inline";
  gameInterface.style.display = "block";
  resetUI();
}

function facil() {
  resetInterface();
  iniciarJogo("Fácil", 10);
}

function medio() {
  resetInterface();
  iniciarJogo("Médio", 100);
}

function dificil() {
  resetInterface();
  iniciarJogo("Difícil", 1000);
}

function pvp() {
  resetInterface();
  gameInstruction.textContent = "Defina o número secreto para o seu oponente!";
  inppvp.style.display = "inline";
  document.getElementById("idproximo1").style.display = "inline";
  document.getElementById("idreset").style.display = "inline";
  gameInterface.style.display = "block";
  resetUI();
}

function proximo1() {
  gameInstruction.textContent = "Agora, tente acertar o número!";
  inppvp.style.display = "none";
  document.getElementById("idproximo1").style.display = "none";
  entrada.style.display = "inline";
  document.getElementById("proxpvp").style.display = "inline";
}

function verificarPalpite() {
  const palpite = parseInt(entrada.value);

  if (isNaN(palpite)) {
    divSaida.innerHTML = "Por favor, insira um número válido!";
    return;
  }

  contadorTentativas++; // Incrementa o contador de tentativas
  divSaida1.textContent = `Tentativas: ${contadorTentativas}`;

  if (palpite === numeroSecreto) {
    divSaida.innerHTML = `🎉 Parabéns! Você acertou em ${contadorTentativas} tentativas! 🎉`;
    entrada.disabled = true; // Desabilita o campo de entrada
    document.getElementById("idproximo").style.display = "none"; // Oculta o botão "Verificar"
  } else if (palpite > numeroSecreto) {
    divSaida.innerHTML = "Seu palpite é muito alto. Tente um número menor!";
    aplicarAnimacaoFeedback();
  } else {
    divSaida.innerHTML = "Seu palpite é muito baixo. Tente um número maior!";
    aplicarAnimacaoFeedback();
  }

  entrada.value = ""; // Limpa o campo de entrada
  entrada.focus(); // Devolve o foco ao campo de entrada
}

function proxpvp() {
  const palpite = parseInt(entrada.value);
  const numeroPvp = parseInt(inppvp.value);

  if (isNaN(palpite)) {
    divSaida.innerHTML = "Por favor, insira um número válido!";
    return;
  }

  contadorTentativas++; // Incrementa o contador de tentativas
  divSaida1.textContent = `Tentativas: ${contadorTentativas}`;

  if (palpite === numeroPvp) {
    divSaida.innerHTML = `🎉 Parabéns! Você acertou em ${contadorTentativas} tentativas! 🎉`;
    entrada.disabled = true; // Desabilita o campo de entrada
    document.getElementById("proxpvp").style.display = "none"; // Oculta o botão "Verificar"
  } else if (palpite > numeroPvp) {
    divSaida.innerHTML = "Seu palpite é muito alto. Tente um número menor!";
    aplicarAnimacaoFeedback();
  } else {
    divSaida.innerHTML = "Seu palpite é muito baixo. Tente um número maior!";
    aplicarAnimacaoFeedback();
  }

  entrada.value = ""; // Limpa o campo de entrada
  entrada.focus(); // Devolve o foco ao campo de entrada
}

function aplicarAnimacaoFeedback() {
  divSaida.style.animation = "none"; // Reseta a animação
  void divSaida.offsetWidth; // Força o reflow
  divSaida.style.animation = "blink 0.5s ease-in-out"; // Aplica a animação
}

function resetUI() {
  entrada.value = "";
  inppvp.value = "";
  divSaida.innerHTML = "";
  divSaida1.textContent = "";
  contadorTentativas = 0;
}

function resetGame() {
  location.reload();
}

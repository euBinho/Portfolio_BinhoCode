// Função para solicitar e validar os nomes dos jogadores
function solicitarNome(jogadorPadrao) {
  let nome;
  do {
    nome = prompt(`Informe o nome do ${jogadorPadrao}:`).trim();
    if (!nome) {
      alert("⚠️ Por favor, insira um nome válido (não apenas espaços).");
    }
  } while (!nome);
  return nome;
}

const jogador1 = solicitarNome("jogador (X)");
let jogador2 = prompt(
  `Informe o nome do Jogador (O)\n(ou digite 'bot' para jogar contra o computador):`
).trim();

if (!jogador2 || jogador2.toLowerCase() === "bot") {
  jogador2 = "Máquina 🤖";
}

let proximaJogada = "X";
let jogadas = 0;
let placar = { [jogador1]: 0, [jogador2]: 0 };

const combinacoesVitoria = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // Linhas
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // Colunas
  [1, 5, 9],
  [3, 5, 7], // Diagonais
];

const botoes = Array.from({ length: 9 }, (_, i) =>
  document.getElementById(`botao${i + 1}`)
);

document.getElementById("reset").addEventListener("click", reset);
botoes.forEach((botao) => botao.addEventListener("click", clica));

// Atualiza o placar inicial
atualizarPlacar();

function clica(event) {
  const botao = event.target;
  realizarJogada(botao);

  if (jogador2 === "Máquina 🤖" && proximaJogada === "O") {
    setTimeout(jogadaMaquina, 500); // Delay para a jogada da máquina
  }
}

function realizarJogada(botao) {
  botao.innerText = proximaJogada;
  botao.disabled = true;
  jogadas++;

  if (verificarVencedor()) {
    const vencedor = proximaJogada === "X" ? jogador1 : jogador2;
    setMensagem(`${vencedor} venceu! 🎉`);
    placar[vencedor]++;
    atualizarPlacar();
    desabilitarTodosBotoes();
  } else if (jogadas === 9) {
    setMensagem("Empate! 🤝");
  }

  proximaJogada = proximaJogada === "X" ? "O" : "X";
}

function jogadaMaquina() {
  // 1. Verifica se há jogadas vencedoras
  let melhorJogada = encontrarMelhorJogada("O");
  if (melhorJogada !== null) {
    realizarJogada(botoes[melhorJogada]);
    return;
  }

  // 2. Bloqueia vitória do jogador humano
  melhorJogada = encontrarMelhorJogada("X");
  if (melhorJogada !== null) {
    realizarJogada(botoes[melhorJogada]);
    return;
  }

  // 3. Prioriza o centro
  if (!botoes[4].disabled) {
    realizarJogada(botoes[4]);
    return;
  }

  // 4. Prioriza os cantos
  const cantos = [0, 2, 6, 8].filter((i) => !botoes[i].disabled);
  if (cantos.length > 0) {
    realizarJogada(botoes[cantos[Math.floor(Math.random() * cantos.length)]]);
    return;
  }

  // 5. Escolhe aleatoriamente entre laterais
  const laterais = [1, 3, 5, 7].filter((i) => !botoes[i].disabled);
  if (laterais.length > 0) {
    realizarJogada(
      botoes[laterais[Math.floor(Math.random() * laterais.length)]]
    );
  }
}

function encontrarMelhorJogada(simbolo) {
  for (let i = 0; i < botoes.length; i++) {
    if (!botoes[i].disabled) {
      botoes[i].innerText = simbolo;
      const vitoria = verificarVencedor();
      botoes[i].innerText = ""; // Limpa temporariamente
      if (vitoria) {
        return i;
      }
    }
  }
  return null;
}

function verificarVencedor() {
  return combinacoesVitoria.some((combinacao) => {
    const [a, b, c] = combinacao.map((i) => botoes[i - 1].innerText);
    return a !== "" && a === b && b === c;
  });
}

function desabilitarTodosBotoes() {
  botoes.forEach((botao) => (botao.disabled = true));
}

function reset() {
  jogadas = 0;
  proximaJogada = "X";
  setMensagem("");
  botoes.forEach((botao) => {
    botao.innerText = "";
    botao.disabled = false;
  });
}

function setMensagem(texto) {
  document.getElementById("mensagem").innerText = texto;
}

function atualizarPlacar() {
  document.getElementById(
    "jogador1-score"
  ).innerText = `${jogador1}: ${placar[jogador1]} vitórias`;
  document.getElementById(
    "jogador2-score"
  ).innerText = `${jogador2}: ${placar[jogador2]} vitórias`;
}

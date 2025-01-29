function insert(num) {
  const resultado = document.getElementById("resultado");
  const error = document.getElementById("error");
  error.textContent = "";

  // Verifica se o limite de caracteres foi atingido
  if (resultado.textContent.length >= 20) {
    error.textContent = "Limite de 20 caracteres atingido!";
    return;
  }

  // Verifica se o campo está vazio e se o caractere é uma expressão
  if (resultado.textContent === "" && ["+", "-", "*", "/"].includes(num)) {
    return; // Ignora a inserção de expressões no início
  }

  // Verifica se o último caractere é uma expressão
  const ultimoCaractere = resultado.textContent.slice(-1);
  const expressoes = ["+", "-", "*", "/"];

  // Se o último caractere for uma expressão e o novo também for, substitui
  if (expressoes.includes(ultimoCaractere) && expressoes.includes(num)) {
    resultado.textContent = resultado.textContent.slice(0, -1) + num;
  } else {
    resultado.textContent += num;
  }

  // Verifica se o limite foi atingido sem nenhuma expressão
  if (
    resultado.textContent.length === 19 &&
    !/[+\-*/]/.test(resultado.textContent)
  ) {
    error.innerHTML = "Lembrando que<br>o limite é 20 caracteres...";
  }
}

function clean() {
  document.getElementById("resultado").textContent = "";
  document.getElementById("error").textContent = "";
}

function back() {
  const resultado = document.getElementById("resultado");
  const error = document.getElementById("error");
  resultado.textContent = resultado.textContent.substring(
    0,
    resultado.textContent.length - 1
  );

  // Limpa o erro quando o usuário apaga
  error.textContent = "";
}

function calcular() {
  const resultado = document.getElementById("resultado");
  const error = document.getElementById("error");
  try {
    const expressao = resultado.textContent.replace(/[^-()\d/*+.]/g, "");

    // Verifica se o limite foi atingido sem uma expressão válida
    if (
      resultado.textContent.length === 20 &&
      !/[+\-*/]/.test(resultado.textContent)
    ) {
      error.textContent = "O limite de 20 caracteres foi atingido!";
      return;
    }

    const calculo = new Function("return " + expressao);
    resultado.textContent = calculo();
    error.textContent = ""; // Limpa o erro se o cálculo for bem-sucedido
  } catch (e) {
    error.textContent = "Erro na expressão!";
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[\d/*+\-.]/.test(key)) {
    insert(key);
  } else if (key === "Enter") {
    calcular();
  } else if (key === "Backspace") {
    back();
  } else if (key === "Escape") {
    clean();
  }
});

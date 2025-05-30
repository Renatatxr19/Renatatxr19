// Lógica do jogo
function iniciarJogo() {
  const numerosPremiados = gerarNumerosPremiados(); // Assume que gerarNumerosPremiados() retorna um array de números
  let tentativas = 0;

  console.log("Bem-vindo ao jogo dos números premiados!");
  console.log("Tente adivinhar pelo menos um dos 3 números entre 1 e 100.");
  console.log("Você tem 3 tentativas. Boa sorte!");

  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function perguntar() {
    if (tentativas >= 3) {
      console.log("n/ Suas tentativas acabaram!")
      console.log(` Os números premiados eram: ${numerosPremiados.join(", ")}`);
      rl.close();
      return;
    }

    rl.question(`Tentativa ${tentativas + 1}: Digite um número entre 1 e 100: `, (resposta) => {
      const palpite = parseInt(resposta);

      if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("⚠️ Número inválido. Tente novamente com um número entre 1 e 100.");
        perguntar();
        return;
      }

      tentativas++;

      if (numerosPremiados.includes(palpite)) {
        console.log("🎉 Parabéns! Você acertou um número premiado!");
    console.log(`Os números premiados eram: ${numerosPremiados.join(", ")}`);
        rl.close();
      } else {
        console.log("❌ Esse número não é premiado.");
        perguntar();
      }
    });
  }

  perguntar();
}

// Função placeholder para gerar números premiados. Você precisaria implementá-la.
function gerarNumerosPremiados() {
  const premios = [];
  while (premios.length < 3) {
    const num = Math.floor(Math.random() * 100) + 1;
    if (!premios.includes(num)) {
      premios.push(num);
    }
  }
  return premios;
}

iniciarJogo();
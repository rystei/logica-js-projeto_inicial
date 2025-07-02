alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = prompt("Informe até quantos números gostaria de encontrar o número secreto");
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = Number(prompt(`Escolha um número entre 1 a ${numeroMaximo}`));
    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

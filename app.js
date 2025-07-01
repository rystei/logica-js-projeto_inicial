alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = Number (prompt("Escolha um número entre 1 a 30"));
    if (numeroSecreto == chute) {
        alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++
    }
}
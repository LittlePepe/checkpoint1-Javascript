function calcular() {
    // input do peso e do valor
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    // calcular o IMC
    var imc = peso / (altura * altura);

    // exibir o resultado

    var resultado = document.getElementById("resultado");
    if (imc < 18.5) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Você está abaixo do peso.";  //toFixed mostra o valor em até 2 casas decimais
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Seu peso está ideal.";
    } else {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Você está acima do peso.";
    }
}
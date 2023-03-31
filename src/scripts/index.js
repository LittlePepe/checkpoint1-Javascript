//---------------------------------------------- EXERCICIO 03 -----------------------------------------------------------------------

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

//---------------------------------------------- EXERCICIO 04 -----------------------------------------------------------------------

function idade() {
    // input da idade
    var idade = document.getElementById("idade").value;

    // exibir o resultado

    var resultado = document.getElementById("resultado2");
    if (idade <= 12) {
        resultado.innerHTML = "Sua idade é " + idade + ". Sua faixa etaria é: Criança";  //toFixed mostra o valor em até 2 casas decimais
    } else if (idade >= 13 && idade <= 18) {
        resultado.innerHTML = "Sua idade é " + idade + ". Sua faixa etaria é: Adolescente";
    } else if (idade >=19 && idade<= 60) {
        resultado.innerHTML = "Sua idade é " + idade + ". Sua faixa etaria é: Adulto";
    } else {
        resultado.innerHTML = "Sua idade é " + idade + ". Sua faixa etaria é: Idoso";
    }
}

//---------------------------------------------- EXERCICIO 05 -----------------------------------------------------------------------


function login() {

    // variavel dos dados de login
    var dbname = "admin";
    var dbpass = "1234";

    // input do login 

    var login = document.getElementById("login").value;
    var password = document.getElementById("pass").value;

    // verificar e exibir o resultado

    var resultado = document.getElementById("resultado3");
        if(dbname == login && dbpass == password){
            resultado.innerHTML = "Acesso Liberado";
        } else {
            resultado.innerHTML = "Acesso Negado";
        }
    
}

//---------------------------------------------- EXERCICIO 06 -----------------------------------------------------------------------

function nota() {

    // input das notas
    var nota1 = Number(document.getElementById("nota1").value);
 		var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
  	var nota4 = Number(document.getElementById("nota4").value);
    var nota5 = Number(document.getElementById("nota5").value);
    var nota6 = Number(document.getElementById("nota6").value);
    var nota7 = Number(document.getElementById("nota7").value);

    // calcular média

    var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7)/7;

    //exibir o resultado

    var resultado = document.getElementById("resultado4");
    if (nota <= 5) {
        resultado.innerHTML = "Sua média é: " + media +  ". Você está abaixo da média ";  //toFixed mostra o valor em até 2 casas decimais
    } else {
        resultado.innerHTML = "Sua média é: " + media +  ". Você está na média/acima ";
    }
    
}
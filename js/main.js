/*function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar() {
    // window.open("https://www.americanas.com.br/?opn=AFLACOM&epar=b2wafiliados&franq=%09AFL-03-5893044&admitad_uid=54fdc21f25ed14c1d25e840bd964c97a");
    window.location.href = "https://www.americanas.com.br/?opn=AFLACOM&epar=b2wafiliados&franq=%09AFL-03-5893044&admitad_uid=54fdc21f25ed14c1d25e840bd964c97a";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por colocar o mouse!";
    elemento.innerHTML = "Obrigado por colocar o mouse!";
    // alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Coloque o mouse sobre o texto!";
    elemento.innerHTML = "Coloque o mouse sobre o texto!";
    // alert("Trocar texto");
}

function load() {
    alert("Pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
/*function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        var validar = true;
    } else {
        var validar = false;
    }
    return validar;
}
var idade = prompt("Qual é a sua idade? ")
console.log(validaIdade(idade)); * /

/*function soma(n1, n2) {
    return n1 + n2;
};
alert(soma(5, 2));*/

/*function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(setReplace("vai Japão", "Japão", "Brasil"));*/

/*var d = new Date();
alert(d.getMonth() + 1);*/
/*var count;

for (count = 0; count <= 5; count++) {
    console.log("Contando " + count);
}*/


/*
var count = 0;
while (count <= 5) {
    console.log("Contando " + count);
    alert("Contando " + count);
    count++;
};*/


/*var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("maior de idade");

} else {
    alert("ainda é menor de idade, e tem " + idade + " de idade.");
};*/



/*var frutas = [{ nome: "maçã", cor: " Vermelha", tamanho: "grande" },
    { nome: "uva", cor: " Vermelha", tamanho: "pequena" },
    { nome: "laranja", cor: " laranja", tamanho: "media" }
];
console.log(frutas);
alert(frutas[1].nome);*/
/*var nome = "Elvis Carlos";
var idade = "41";
var idade2 = "10";
var frase = "Brasil tem a melhor educação do mundo";
//alert("Bem vindo " + nome);
//alert(idade + idade2);
//alert(frase.replace("Brasil", "Japão"));
alert(frase.toLowerCase());*/
//var lista = ["maçã", " pêra", "laranja"];
//lista.push("uva"); // add um item ao final da lista
//lista.pop(); // remove  o item do final da lista
/*console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toLocaleString());*/
//console.log(lista.join(" * "));*/let line = gets().split(" ");

let line = gets().split("11", "7");
let A = parseInt(gets());
let B = parseInt(gets());
let total = (A + B); // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
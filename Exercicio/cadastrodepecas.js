var ListadePecas = ["peça 1", "peça 2", "peça 3", "peça 4", "peça 5", "peça 6", "peça 7", "peça 8", "peça 9", "peça 10", "peça 11"];
console.log("quantidades de peças");
//A linha de cima é uma imformação apenas. 

if (ListadePecas.length > 10 ){
    console.log("Capacidade insuficiente");
}
else {
    console.log("As peças podem ser cadastradas")
}

console.log("quantidade de caracteres");

for (var contador = 0; contador < ListadePecas.length; contador++){
    var pecaAtual = ListadePecas[contador];

if (pecaAtual.length < 3){
    console.log(pecaAtual + ": a peça possui nome inferior 3 caracteres e não podr ser cadastrada");
}
else {
    console.log(pecaAtual + ": a peça pode ser cadastrada. ")
}
}
console.log("Peso da peça")

var PesoDaPecaEmGramas = 300;

if (PesoDaPecaEmGramas < 100){
    console.log("peso insuficiente");
} else{
    console.log("peso suficiente")
}
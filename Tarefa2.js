// Tabela que contém tabuada de multiplicação

const prompt = require("prompt-sync")();
let denominador = prompt("Digite o segundo numero da tabuada de multiplicação: ");

const tabuada = [];
    for (let i=0; i<11; i++) {
        tabuada[i] = [];
        console.log(i + " x " + (denominador) + " = " + (i*denominador));
    }
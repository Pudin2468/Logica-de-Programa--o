// Função conversora de comprimento de metros para centímetros, milímetros e quilômetros

const prompt = require("prompt-sync")();
let metro = prompt("Insira a quantidade de metros desejados: ")
let centimetro = metro / 100
let milimetro = metro / 1000
let quilometro = metro * 0.001

console.log(`os quilometros são ${quilometro} km, o metro é ${metro} m, os centimetros são ${centimetro} cm, os milimetros são ${milimetro} mm`)
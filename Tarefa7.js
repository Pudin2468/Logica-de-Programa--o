//Função que remove espaços desnecessarios em uma string

const prompt = require("prompt-sync")();
const cep = prompt("digite seu Cep:");
const cepFormatado = cep.replace(/[^0-9]/g,"");
    if (cepFormatado.length !== 8) {
            console.log("Cep inválido, digite novamente");
    } else {console.log("cep válido");
    }


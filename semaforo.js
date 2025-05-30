const prompt = require("prompt-sync")(); // adicionar o prompt-sync
let color = prompt(" Digite uma cor (vermelho, amarelo ou verde): ").toLowerCase();
switch (color) {
    case "vermelho": console.log("Pare!"); break;
    case "amarelo": console.log("Atenção!");break;
    case "verde": console.log("Siga!"); break;

default: console.log("Cor inválida!");
}
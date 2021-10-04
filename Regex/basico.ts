const soLetrasMinusculas = /^[a-z]*$/;
const soLetrasMaiusculas = /^[A-Z]*$/;
const encontrarSufixo = /[\s\S]+?@gmail.com+$/;

const teste1 = "Ola";
const teste2 = "ola";
const teste3 = "OLA";
const teste4 = "ola@gmail.com.br";
const teste5 = "ola@gmail.com";

console.log("Só letras maiusculas");
console.log(teste1, soLetrasMaiusculas.test(teste1));
console.log(teste2, soLetrasMaiusculas.test(teste2));
console.log(teste3, soLetrasMaiusculas.test(teste3));
console.log(teste4, soLetrasMaiusculas.test(teste4));
console.log("\n\n");

console.log("Só letras minuscula");
console.log(teste1, soLetrasMinusculas.test(teste1));
console.log(teste2, soLetrasMinusculas.test(teste2));
console.log(teste3, soLetrasMinusculas.test(teste3));
console.log(teste4, soLetrasMinusculas.test(teste4));
console.log("\n\n");

console.log("Encontrar sufixo @gmail.com");
console.log(teste4, encontrarSufixo.test(teste4));
console.log(teste5, encontrarSufixo.test(teste5));

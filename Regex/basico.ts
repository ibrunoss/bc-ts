const soLetrasMinusculas = /^[a-z]*$/;
const soLetrasMaiusculas = /^[A-Z]*$/;
const encontrarSufixo = /[\s\S]+?@gmail.com+$/;
const iniciaETerminaComAMesmaVogal = /^([aeiou]).*\1$/i;
const iniciaComFormalidade = /^(Sr|Sra|Dr|Dra)\.(\s|[A-Za-z])+$/;

const teste1 = "Ola";
const teste2 = "ola";
const teste3 = "OLA";
const teste4 = "ola@gmail.com.br";
const teste5 = "ola@gmail.com";
const teste6 = "Ana";
const teste7 = "Oloco";
const teste8 = "Dr. Bruno";
const teste9 = "Sra. Nivalda";
const teste10 = "Sra. Nivalda 1";
const teste11 = "Dr. Bruno 1";
const teste12 = "Sra. Nivalda 23";
const teste13 = "Dr. Bruno 23";

const peloMenosUmNumero = /(?=.*?[0-9])/;
const peloMenosDoisNumero = /(?=.*?[0-9]{2,})/;

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
console.log("\n\n");

console.log("Inicia e termina com a mesma vogal");
console.log(teste1, iniciaETerminaComAMesmaVogal.test(teste1));
console.log(teste2, iniciaETerminaComAMesmaVogal.test(teste2));
console.log(teste6, iniciaETerminaComAMesmaVogal.test(teste6));
console.log(teste7, iniciaETerminaComAMesmaVogal.test(teste7));
console.log("\n\n");

console.log("Inicia e termina com Sr.|Sra.|Dr.|Dra.");
console.log(teste1, iniciaComFormalidade.test(teste1));
console.log(teste2, iniciaComFormalidade.test(teste2));
console.log(teste8, iniciaComFormalidade.test(teste8));
console.log(teste9, iniciaComFormalidade.test(teste9));
console.log("\n\n");

console.log("Pelo menos um numero");
console.log(teste8, peloMenosUmNumero.test(teste8));
console.log(teste9, peloMenosUmNumero.test(teste9));
console.log(teste10, peloMenosUmNumero.test(teste10));
console.log(teste11, peloMenosUmNumero.test(teste11));
console.log(teste12, peloMenosUmNumero.test(teste12));
console.log(teste13, peloMenosUmNumero.test(teste13));
console.log("\n\n");

console.log("Pelo menos dois numero");
console.log(teste8, peloMenosDoisNumero.test(teste8));
console.log(teste9, peloMenosDoisNumero.test(teste9));
console.log(teste10, peloMenosDoisNumero.test(teste10));
console.log(teste11, peloMenosDoisNumero.test(teste11));
console.log(teste12, peloMenosDoisNumero.test(teste12));
console.log(teste13, peloMenosDoisNumero.test(teste13));

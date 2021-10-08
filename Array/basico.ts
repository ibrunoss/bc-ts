const algunsNumerosRepetidos: number[] = [
  1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 13,
];
const semNumeroRepetido: typeof algunsNumerosRepetidos = [
  ...new Set(algunsNumerosRepetidos),
]; //set só funciona a partir do ES6

console.log(algunsNumerosRepetidos, semNumeroRepetido);

console.log(
  semNumeroRepetido.some(
    (currentValue, index, array) => currentValue === 1000,
    this
  )
);
console.log("\n");
console.log(Array.of(3)); // Cria um novo array com o item 3
console.log(Array.of(3).fill(4)); // Cria um novo array com o item 3 e reescreve o item 3 pelo 4;
console.log(Array(3)); // Cria um novo array vazio com 3 tres posições
console.log(Array(3).fill(4)); // // Cria um novo array vazio com 3 tres posições e preenche as três posições com o valor 4;

console.log("\n");
//console.log(algunsNumerosRepetidos.at(-1)); não funciona no typescript

const frutas: string[] = [
  "Abacaxi",
  "Banana",
  "Carambola",
  "Damasco",
  "Embaúba",
  "Figo",
  "Goiaba",
  "Heisteria",
  "Ingá",
  "Jabuticaba",
  "Kino",
  "Laranja",
  "Maçã",
  "Noz",
  "Oiti",
  "Pera",
  "Quiuí",
  "Romã",
  "Sapucaia",
  "Tangerina",
  "Uva",
  "Vacínio",
  "Wampi",
  "Xixá",
  "Yamamomo",
  "Zimbro",
];

// Entrega o indice
for (let indice in frutas) {
  console.log(indice);
}

//Entrega o elemento
for (let fruta of frutas) {
  console.log(fruta);
}

//Tuplas = define exatamente a quantidade de elementos com seus respectivos tipos e posição
const tupla: [string, number, boolean] = ["Tipo tupla", 10, true];

console.log(tupla);

//Enum
enum DiasDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}

//const dia: string = "Segunda"; assim não funciona por causa do tipo
const dia = "Segunda";

console.log(DiasDaSemana.Domingo);
console.log(DiasDaSemana[0]);
console.log(DiasDaSemana[dia]);
console.log(typeof DiasDaSemana[0]);

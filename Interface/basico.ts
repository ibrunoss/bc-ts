interface Humano {
  nome: string;
}

interface Humano2 {
  nome: string;
  [prop: string]: any;
}

function saudarComOla(pessoa: Humano) {
  console.log(`Ola ${pessoa.nome}`);
}

function saudarComOla2(pessoa: Humano2) {
  console.log(`Ola ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Da Silva";
}

const eu = {
  nome: "Bruno",
  idade: 32,
};

//saudarComOla({ nome: "Bruno", idade: 32 }); //Se não possuir a propriedade na interface não funciona
saudarComOla2({ nome: "Bruno", idade: 32 });
saudarComOla(eu);
mudarNome(eu);
saudarComOla(eu);

interface Humano {
  nome: string;
}

interface Humano2 {
  nome: string;
  [prop: string]: any;
}

interface TipoGenerico<T> {
  idade: T;
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

function idade<T>(obj: TipoGenerico<T>) {
  console.log(typeof obj.idade);
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
idade<string>({ idade: "32" });
idade<number>({ idade: 32 });

type ManipuladorDeString = (s: string) => string;
type ComporFuncoes1 = (
  fn1: ManipuladorDeString,
  fn2: ManipuladorDeString,
  s: string
) => string;

type ComporFuncoes2 = (
  fn1: ManipuladorDeString,
  fn2: ManipuladorDeString
) => ManipuladorDeString;

type ComporFuncoes3 = (...fn: ManipuladorDeString[]) => ManipuladorDeString;

const gritar: ManipuladorDeString = (s) => s.toUpperCase();
const enfatizar: ManipuladorDeString = (s) => s + "!!!";

console.log(enfatizar(gritar("oi")));

const compor: ComporFuncoes1 = (fn1, fn2, s) => fn1(fn2(s));

console.log(compor(gritar, enfatizar, "oi"));

const compor2: ComporFuncoes2 =
  (...fns) =>
  (s) =>
    fns.reduce((acc, cur) => cur(acc), s);

const compor3: ComporFuncoes3 = (fn1, fn2) => (s) => fn1(fn2(s));

const exagerar: ManipuladorDeString = compor3(gritar, enfatizar);

console.log(exagerar("oi"));

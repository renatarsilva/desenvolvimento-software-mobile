const ano = 1991;
let atrasaoEmSegundos = 0.00016;
let area = (16*3.14);
let metadeArea = area/2;

console.log("ano: " + ano);
console.log("atraso em segundos: " + atrasaoEmSegundos);
console.log("área: " + area);
console.log("metade da área: " + metadeArea);

let a = 10;
let b = 0x10;   
let c = 0o10;
let d = 0b10;

console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);
console.log("d: " + d);

let x = 9e3;
let y = 9e-3;

console.log("x: " + x);
console.log("y: " + y);

let z = 0x21;
console.log("z: " + z);

let nome = "Joao";
let idade = 30;

let mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem);

let multiLineString = `
Esta é uma string
que ocupa várias linhas.
`;
console.log(multiLineString);

let texto = "Olá, mundo!";

console.log(texto.startsWith("Olá"));
console.log(texto.endsWith("mundo!"));
console.log(texto.includes("mundo"));
console.log("abc".repeat(3));

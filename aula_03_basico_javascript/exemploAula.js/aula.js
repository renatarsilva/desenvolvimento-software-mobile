// const ano = 1991;
// let atrasaoEmSegundos = 0.00016;
// let area = (16*3.14);
// let metadeArea = area/2;

// console.log("ano: " + ano);
// console.log("atraso em segundos: " + atrasaoEmSegundos);
// console.log("área: " + area);
// console.log("metade da área: " + metadeArea);

// let a = 10;
// let b = 0x10;   
// let c = 0o10;
// let d = 0b10;

// console.log("a: " + a);
// console.log("b: " + b);
// console.log("c: " + c);
// console.log("d: " + d);

// let x = 9e3;
// let y = 9e-3;

// console.log("x: " + x);
// console.log("y: " + y);

// let z = 0x21;
// console.log("z: " + z);

// let nome = "Joao";
// let idade = 30;

// let mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`;
// console.log(mensagem);

// let multiLineString = `
// Esta é uma string
// que ocupa várias linhas.
// `;
// console.log(multiLineString);

// let texto = "Olá, mundo!";

// console.log(texto.startsWith("Olá"));
// console.log(texto.endsWith("mundo!"));
// console.log(texto.includes("mundo"));
// console.log("abc".repeat(3));

 //

//  let texto1 = "JavaScript é incrível!";
//  console.log(texto.charAt(4));

// let texto2 = "O subiu no telhado e depois pulou";
// console.log(texto2.indexOf("gato"));
// console.log(texto2.lastIndexOf("pulou"));

// let palavra1 = "abcdefgh";
// console.log(palavra1.substring(2,5));

// let texto3 = "Esta é uma string de exemplo.";
// console.log(texto3.slice(5,7));

// let lista = "maca,banana,laranja,uva,melancia";
// let frutas = lista.split(", ");
// console.log(frutas);

// let frase2 = "O rato roeu a roupa do rei de Roma";
// let novaFrase = frase2.replace("rato", "gato");
// console.log(novaFrase);

// let texto4 = "   Espaços em branco no início e no final   ";

// console.log(texto4.toUpperCase());
// console.log(texto4.toLowerCase());

// let texto5 = "   Espaços em branco no início e no final   ";
// console.log(texto5.trim());

// 

// let multiplicar = function(a,b){
//    return a * b;
//  }
// // console.log(multiplicar(4,3))

// let usuario1 = {}
// console.log(usuario1);

// let carro = {
//     marca: "Toyota",
//     model: "Corola",
//     acelerar: function(){
//         console.log("O carro está acelerando!");
//     }
// }

// carro.acelerar();

// let numeros =[1,2,3,4,5];
// let nomes = ["João", "Maria", "Pedro"];
// let misto = [1, "dois", true, null, undefined, {nome: "João"}];

// console.log(numeros[0]);
// console.log(nomes[1]);

// for (i=0; i<numeros.length; i++){
//     console.log(numeros[i]);
// }

// numeros.forEach(function(numero){
//     console.log(numero)
// });

// let dobro = numeros.map(function(numero){
//     return numero * 2;
// });
// console.log(dobro);

// numeros.push(6);
// console.log(numeros);

// numeros.pop();
// console.log(numeros);


// const numeros1 = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(b);
// console.log(c);

// const [primeiro, , terceiro] = numero1;

// const pessoa = {nome: 'Ana', idade:30};
// const {nome, idade } = pessoa;

// console.log(pessoa);
// console.log(idade);

// const {nome: primeiroNome, idade: anos} = pessoa;
// console.log(primeiroNome);
// consoleç.log(idade);

// const{ sobrenome = 'Silva', cidade = 'Rio de Janeiro'} =pessoa;
// console.log(sobrenome);
// console.log(cidade);

// let idade2 = 20;
// if (idade2 >= 18){
//     console.log("Pode dirigir");
// } else {
//     console.log("Nao pode")
// }


// let diaDaSemana = "segunda";
// switch(diaDaSemana){
//     case "segunda":
//         console.log("Trabalhar");
//         break;
//     case "sabado":
//         console.log("Descansar");
//         break;
//     default:
//         console.log("Dia inválido")};

const frutas = ["maça", "banana", "abacaxi"]
for (let fruta of frutas){
    console.log(fruta)
}

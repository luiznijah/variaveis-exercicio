                        //execicio 1


let nome ;
let idade ;

console.log (typeof(nome));
console.log(typeof(idade));
//deu undefined pois o valor das variaveis não foram especificados

nome = prompt ("Qual é seu nome?");
idade = Number( prompt("Qua é a sua idade?"));

console.log (typeof(nome));
console.log(typeof(idade));


console.log ("nome ",nome);
console.log("idade ",idade);
console.log ("Olá "+ nome + " você tem " + idade + " anos");
alert ("Olá "+ nome + " você tem " + idade + " anos");


                      // exercicio 2


const perguntaA = "Qual o nome do seu pai ? ";
const respostaA = prompt(perguntaA);

const perguntaB = "Qual onome da sua mãe ?";
const respostaB = prompt(perguntaB);

const perguntaC = "Você em irmãos ?";
const respostaC = prompt(perguntaC);

console.log (perguntaA , "-" , respostaA);
console.log (perguntaB , "-" , respostaB);
console.log (perguntaC , "-" , respostaC);




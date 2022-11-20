// declarando uma variavel nome sem valor
const Nome = "Luiz" 
// declarando uma variavel idade sem valor
let Idade = 24
// imprimir o nome e idade 
console.log ("Me chamo " + Nome , "Tenho " + Idade)
// imprimir o tipo da variavel
/* na variavel nome foi impresso string por que 
são caracteres dentro de aspas */
console.log ("Valor:" + Nome + " - Tipo: " + typeof(Nome))
/*na variavel idade foi impresso number porque são numeros
e estão sem as aspas o que os transfoma em um tipo number */
console.log ("Valor:" + Idade + " - Tipo: " + typeof(Idade))
/*criei uma variavel seuNome junto com o prompt que 
pergunta "qual seu nome " */
const seuNome=prompt ("qual seu nome?")
/* criei uma variavel suaIdade junto com o prompt que pergunta 
"qual a sua idade */
let suaIdade=prompt ("qual a sua idade?")
/*criei um console.log para me mostrar o resultado 
que foi digitado na variaele tanto do seuNome quanto no suaIdade */
console.log ("Me chamo " + seuNome , "e tenho " + suaIdade + " anos")

console.log (" Valor:" + seuNome +" - Tipo:" + typeof(seuNome))
console.log (" Valor:" + suaIdade +" - Tipo:" + typeof(suaIdade))
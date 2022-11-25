       //Bloco de perguntas
const nomeCompleto = "Digite seu nome completo";
const dataNascimento = "Digite sua data de nascimento";
const endereco = "Informe seu indereço";
const cpf = "Digite seu CPF";
const escolaridade = "Informe sua escolaridade";
const cnh = "Você possui CNH ?";
const quantosFilhos = "Você possui quantos filhos?";
const cargoAtual = "Qual seu cargo atual ?";
const salario = "Qual seu salário atual?";
const comicao = "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero";
const anoDeAdimicao = "Informe seu ano de adimição";
       //Bloco de prompts e confirms
const resNomeCompleto = prompt(nomeCompleto)
const resDataNascimeto = Number ( prompt(dataNascimento))
const resEndereco = prompt(endereco)
const resCpf = Number( prompt(cpf))
const resEscolaridade = prompt(escolaridade)
const resCnh = confirm(cnh)
const resQuantosFilhos = Number( prompt(quantosFilhos))
const resCargoAtual = prompt(cargoAtual)
const resSalario = Number( prompt(salario))
const resComicao = Number( prompt(comicao))
const resAnoAdimicao = Number( prompt(anoDeAdimicao))

console.log (typeof (resNomeCompleto),"nome completo ", resNomeCompleto)
console.log (typeof(resDataNascimeto),"data de nascimento" ,resDataNascimeto)
console.log (typeof(resEndereco),"Endereço",resEndereco)
console.log (typeof(resCpf),"CPF",resCpf)
console.log (typeof(resEscolaridade),"Escolaridae",resEscolaridade)
console.log (typeof(resCnh),"CNH",resCnh)
console.log (typeof(resQuantosFilhos),"Quantos filhos",resQuantosFilhos)
console.log (typeof(resCargoAtual),"Cargo atual",resCargoAtual)
console.log (typeof(resSalario),"Salario",resSalario)
console.log (typeof(resComicao),"Comição",resComicao)
console.log (typeof(resAnoAdimicao),"Ano de admição",resAnoAdimicao)

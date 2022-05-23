
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

//  Sua lógica aqui

function checarIgualdade(a, b) {
    
    return `No comparador de igualdade ${a}=${b} é ${a === b}`
}
 console.log(checarIgualdade(3,3)); 

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {
    
    return `No comparador ${a} > ${b} é ${a > b}`
}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false (mesmo caracter mas não é o mesmo tipo)
// b-) 1=='1'= true (mesmo caracter)
// c-) 'a'==='b'= false (mesmo tipo, mas não mesmo caracter)
// d-) 'b'>'a'= true (b vem depois de a, logo é maior)
// e-) 0!==null= true (o é diferente de null mas recebe sinal de inversão "!")


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     const usuario = []

    //  Sua lógica aqui

const nomeDoUsuario = prompt ('Qual seu nome?').toLowerCase ();
const anoDeNascimento =  Number (prompt ('Qual seu ano de nascimento?'));
const senhaDoUsuario =  prompt ('Qual sua senha? No mínimo 6 caracteres').trim();
const nacionalidade =  prompt ('Você é brasileiro? Sim ou Não?').toLowerCase();
const usuario = [nomeDoUsuario,anoDeNascimento,senhaDoUsuario,nacionalidade]

function cadastro (ano, senha, pais){

if ((ano <= 2004) && (senha.length >= 6) && (pais === "sim")){
console.log ('Bem vindo ao cadastro de usuário');
} else {
    console.log("Desculpe, mas não poderemos seguir com o cadastro.");
}}

cadastro(anoDeNascimento,senhaDoUsuario,nacionalidade)



// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    //  Sua lógica aqui


}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());
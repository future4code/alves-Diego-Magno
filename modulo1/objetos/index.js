// //Exercícios de interpretação de código:

// //1- a) ("Matheus Nachtergaele"), ("Virginia Cavendish"), ("Globo", "14h")

// //2- a) (nome: "Juca", idade: 3, raca: "SRD"), (nome: "Juba", idade: 3, raca: "SRD"), (nome: "Jubo", idade: 3, raca: "SRD");
// // b) ...copia e sobrescreve valores através do seu index.

// //3- a e b) "false" - retorna só a propriedade;
// //          "undefined" - a propriedade "altura" não foi declarada.


// //Exercícios de escrita de código

// // 1- Resolva os passos a seguir:

// //a)

// const pessoa = {
//     nome: "Diego",
//     apelidos: ["Branco", "Di","Degê"]
// }

// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

// //b) 

// const novaPessoa = {
//         ...pessoa,
//         apelidos: ["Orelha", "Diguin", "DigMag"]
//     }

//     console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos}`)

    
//     // 2- Resolva os passos a seguir:

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const pessoa1 = {
    nome: "Diego",
    idade: 34 ,
    profissao: "Estudante"
}

const pessoa2 = {
    ...pessoa1,
    nome: "Magno",
    idade: 35,
    profissao: "Programador"
}

//b) 

 
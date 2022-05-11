//Exercícios de interpretação de código

//1- Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // "a. false"

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // "b. false"

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // "c. true"

console.log("d. ", typeof resultado) // "d. boolean


//2- Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number (primeiroNumero) + Number (segundoNumero)

console.log(soma)


//3-  Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

//Resposta 2 e 3: Tudo o que o usuário insere em um prompt é uma string, daí temos que converter a String em Número através do método "Number()" na variável a ser lida.



//Exercícios de escrita de código


//1. Faça um programa que:
    
// a) Pergunte a idade do usuário
    
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

let idadeUsuario = prompt ("Qual a sua idade?")
let idadeMelhorAmig = prompt ("Qual a idade do seu(ua) melhor amigo(a)?")

let comparador = Number (idadeUsuario) > Number (idadeMelhorAmig)

let difIdade = Number (idadeUsuario) - Number (idadeMelhorAmig)

console.log ("Sua idade é maior do que a do seu melhor amigo?", comparador)

console.log ("A diferença da idade de vocês é de:", difIdade, "anos." )


// 2. Faça um programa que:
    
//a) Peça ao usuário que insira um número **par**
    
//b) Imprima na console **o resto da divisão** desse número por 2.
    
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

let numeroPar = prompt ("Insira um número par!") //a)

console.log (Number(numeroPar) % 2) //b)

//c) Número par dividido por 2 é uma divisão exata de sobra 0.

//d) Número ímpar dividido por 2 é uma divisão não exata de sobra 1.


//4- Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

let priNumero = prompt("Digite um numero!")
let segNumero = prompt("Digite outro numero!")

const compar = Number (primeiroNumero) + Number (segundoNumero)

console.log(compar)
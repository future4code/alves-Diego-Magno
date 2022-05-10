//1- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

//resposta: 10,5 - já que o valor de b foi o último item a ser modificado.



//2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

//resposta: 10,10,10 - já que o valor de c não foi informado, ele é ignorado em c=a, em b=c, c passa a valer 20, porém em a=b, b passa a valer 10 e por consequencia também modifica o valor de c.



//3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

//resposta: Podem ser as seguintes modificações: p= quantidadeHora e t= valorDia.


//Exercícios de escrita de código

let nome 

let idade

console.log(typeof nomeAluno, idade)

//Por que esse tipo foi impresso? -- undefined é retornado toda vez que temos valores indefinidos.

nome = prompt("Qual seu nome")
idade = prompt ("Qual sua idade")

console.log("Olá", nome,  "você tem", idade, "anos")

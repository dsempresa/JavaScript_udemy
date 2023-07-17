/*
Primitivos(imutáveis) - string,number,boolean,undefined,null(bigint,symbol) - Valores copiados*/
//         0123  // strings sãó indexadas entre [cochetes]
/*let nome= 'Luiz'
nome[0] = 'r'
console.log(nome[0], nome)*/
/*let a = 'A'
let b = a //Cópia
console.log(a, b)
a = 'Outra coisa'
console.log(a, b)*/

/*Referencia (mutável) - arrays, object, function - Passados por referência
*/
/*let a = [1, 2, 3]
let b = [...a] // fazendo valor de b ficar independente
let c = b
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)
a.push('Luiz')
console.log(a, c)*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

const b = a // fazendo um spreat

a.nome = 'João'
console.log(a, b)
// For in >>> lê os indices ou chaves do objeto


//                0        1       2
//const frutas = ['Pêra', 'Maçã', 'Uva']

//for(let i in frutas) {
//    console.log(frutas[i])
//}

// for(let i = 0; i < frutas.length; i ++){
//    console.log(frutas[i])
//}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

/*for(let chaves in pessoa) {
    console.log(chaves)
}*/
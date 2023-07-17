//let alunos = ['Luiz', 'Maria', 'João']
//delete alunos[1]
//console.log(alunos[1]) // deletando item => undefined

//alunos[0] = 'Eduardo'
//alunos.push('Luiza') // adiciona no final do array
//alunos.push('Otávio')
//alunos.push('Will')
//console.log(alunos.slice(0, 4)) // selecionando os itens do array => fazendo fatiamento
//console.log(alunos instanceof Array) // saber se o tipo é array ou objeto => vai retornar true ou false

/*alunos.unshift('Mario') //adiciona no começo do array
alunos.pop() // remove do final
let removido = alunos.shift() remove do começo
console.log(removido)
console.log(alunos)*/

const array = [1, 2, 3, 4, 5];
array.pop();
array[1] = 1024;
console.log(array);
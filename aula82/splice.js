//                0        1        2           3        4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']

//nomes.splice(índice, delete, elem1, elem2, elem3)
//pop

const removido = nomes.splice(4, 1)
console.log(nomes, removido)
// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
// ... rest (pegar o resto das coisas)  / ... spread()
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//const primeiroNumero = numeros[0]
//console.log(primeiroNumero)
//const [primeiroNumero, segundoNumero, ...resto] = numeros
//console.log(primeiroNumero, segundoNumero)
//console.log(resto)

//                    0          1          2                
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = numeros
console.log(lista3[2])
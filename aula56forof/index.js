const nome = ['Diego Sousa', 'da Silva']

for(let valor of nome) {
    console.log(valor)
}

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})

//for classico - Geralmente com iteráveis(array ou strings)
//for in - retorna indice ou chave (string, array, ou objetos)
//for of - retorna o valor em si (iteraveis, array, ou string)


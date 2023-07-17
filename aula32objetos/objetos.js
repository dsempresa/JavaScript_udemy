/*const array = [1,2,3]
array.push(4)
array[0] = 'Luiz'
console.log(array)*/

/*const nome01 = 'Luiz'
const sobrenome01 = 'Miranda'
const idade01 = 25

const nome02 = 'Luiz'
const sobrenome02 = 'Miranda'
const idade02 = 25 */// >>>>>>>>>>>>>>
/*const pessoa1 = {
    nome:'Luiz', 
    sobrenome:'Miranda',
    idade:25
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)*/

/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
console.log(pessoa1.nome) >>>>>>>>>>>>>> factore > função que cria objetos*/


/*function criaPessoa (nome, sobrenome, idade) {
    return {
    nome,sobrenome,idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 28)
const pessoa2 = criaPessoa('Maria', 'Sousa', 24)
const pessoa3 = criaPessoa('Diego', 'Silva', 21)
const pessoa4 = criaPessoa('Eilton', 'Melo', 29)
const pessoa5 = criaPessoa('Debora', 'Ferreira', 27)
console.log(pessoa1.nome, pessoa2.idade)*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++
    }
}
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()



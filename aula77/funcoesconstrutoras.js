//Fnções construtoras -> constroi objetos -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    //variaveis privadas pq n estão disponiveis fora do objeto
    const ID = 123456

    const metodoInterno function() {

    }

    //atributos ou metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ' ' + sobrenome + ': sou um método')
    }
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Oliveira')
p1.metodo()

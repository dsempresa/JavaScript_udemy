//return
//retorna um valor e termina a função

/*function soma(a, b) {
    return a + b

}

function soma2(a, b) {
    console.log(a+b)
}

soma2(5, 2)*/


/*document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red'
})

document.addEventListener()*/

/*function criaPessoa(nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome}
}

const p1 = criaPessoa('Luiz', 'Otavio')
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}

console.log(typeof p1)
console.log(typeof p2)*/

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala = falaFrase('olá')
const resto = fala('mundo!')
console.log(resto)



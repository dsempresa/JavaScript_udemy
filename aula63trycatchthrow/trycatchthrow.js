/*try {
    console.log(naoExisto)
}catch(erro) {
    console.log('naoExisto não existe.')
}*/

/*function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('x e y precisam ser números.')
    }
    return x + y
}

try { // É execultada quando não há erros
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(error){  // É execultada quando há erros
    console.log(error)
} finally {  // Sempre será executado
    console.log('tambem sou finally')
}*/

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if(!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {

    })
}
try {
    const data = new Date('01-01-1970 13:50:34')
    const hora = retornaHora(11)
    console.log(hora)
} catch(e){
    //tratar erro
    console.log(e)
} finally {
    console.log('Tenha um bom dia.')
}

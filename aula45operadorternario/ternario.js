//(condição) ? -> 'valor pra verdadeiro'/  : -> 'valor para falso'/  operador ternário => substitui o if e else

const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'


const corUsuario = 'red'
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)
//if(pontuacaoUsuario >= 1000) {
//    console.log('Usuário VIP')
//}else {
//    console.log('Usuário normal')
//}
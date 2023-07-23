// capturar evento de submit do formulário
let form = document.querySelector('#formulario')

form.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log('Evento prevenido!')
    
})

function resultado(msg) {
    let resultado = document.querySelector('#resultado')
}
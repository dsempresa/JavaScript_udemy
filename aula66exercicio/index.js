let relogio = document.querySelector('.relogio')
let iniciar = document.querySelector('.iniciar')
let pausar = document.querySelector('.pausar')
let zerar = document.querySelector('.zerar')

let disparar = (setInterval, 1000)


iniciar.addEventListener('click', function(event){
    relogio.style.color = 'black'
    relogio.innerHTML = disparar
})

pausar.addEventListener('click', function(event){
    relogio.style.color = 'red'
})

zerar.addEventListener('click', function(event){
    relogio.style.color = 'black'
})



let num = Number(prompt('Digite um número'))
let numeroTitulo = document.querySelector('#numero-titulo')
let texto = document.querySelector('#texto')

numeroTitulo.innerHTML = num
texto.innerHTML = `Raiz quadrada: ${num ** 0.5}<br>`
texto.innerHTML += `${num} é inteiro:${Number.isInteger(num)}<br>`
texto.innerHTML += `É NaN:${Number.isNaN(num)}<br>`
texto.innerHTML += `Arredondando para baixo:${Math.floor(num)}<br>`
texto.innerHTML += `Arredondando para cima:${Math.ceil(num)}<br>`
texto.innerHTML += `Com duas casas decimais:${num.toFixed(2)}`


let nome = prompt('Digite seu nome:')
let quantidadeLetras = nome.length
let quantLetras= quantidadeLetras.split(' ')
alert(document.body.innerHTML += `Seu nome é: ${nome} <br/ >`)
alert(document.body.innerHTML += `Seu nome tem ${quantLetras} letras <br>`)
alert(document.body.innerHTML) += `A segunda letra do seu nome é: <br>`
alert(document.body.innerHTML) += `Qual primeiro indíce da letra "a" no seu nome?<br>`

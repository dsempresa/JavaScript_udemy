// arguments que sustenta todos os argumentos enviados em funções criadas na palavra function (não funciona em arrow function)
//argumentos são valores enviados para os parâmetros das funções

/*function funcao() {
   let total = 0
   for (let argumento of arguments) {
    total += argumento
   }
   console.log(total)
}

funcao(1, 2, 3)*/

// (...) esses tres pontos antes da variavel significa rest operetor

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === "+") acumulador += numero
        if(operador === "-") acumulador -= numero
        if(operador === "*") acumulador *= numero
        if(operador === "/") acumulador /= numero
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)
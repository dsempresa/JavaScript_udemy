// methodo = quando está dentro de um objeto
// função = quando está fora de objeto
// undefined = Não aponta p lugar nenhum na memória
// função "confirm" = pode retornar até dois valores => true ou false

let num1 = prompt('Digite um número:')
let num2 = prompt('Digite outro número:')
num1 = Number(num1)
num2 = Number(num2)
let soma = num1 + num2
alert(`O resultado da conta é: ${soma}`)
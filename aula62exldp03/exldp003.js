/*let min = 0
let max = 100
let num = Math.floor(Math.random() * (max - min) + min)

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return num
  }
console.log(getRandomInt(min, max))


function numero() {
    if(num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz'
    }if(num % 3 == 0) {
        return 'Fizz'
    }if(num % 5 == 0) {
        return 'Buzz'
    }
    else {
        return num
    }
}

function checar(num) {
    if(Number.isInteger(num)) {
        return num
    }else {
        return NaN
    }
}
console.log(numero(num))
console.log(checar(num))
*/

function numero(num) {
    if(typeof num !== 'number') return num
    if(num % 3 == 0 && num % 5 == 0) return 'FizzBuzz'
    if(num % 3 == 0) return 'Fizz'
    if(num % 5 == 0) return 'Buzz'
    return num
    }

console.log('a', numero('a'))
for(let i = 0; i <= 100; i ++) {
    console.log(i, numero(i))
}














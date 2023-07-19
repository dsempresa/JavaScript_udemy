
    let peso = document.querySelector('#ipeso')
    let altura = document.querySelector('#ialtura')
    let res = document.querySelector('#resultado')
function calculoIMC() {
    let pesoUsuario = Number(peso.value)
    let alturaUsuario = Number(altura.value) 
    let IMC = pesoUsuario / (alturaUsuario * alturaUsuario)
    if(pesoUsuario == ' ' || alturaUsuario == ' ' ) {
        alert('Atenção! Preencha todos os campos.')
    } 
    else if(IMC < 18.5) {
        res.innerHTML += `${IMC},você está abaixo do peso ideal!`
    }
    else if(IMC >= 18.5 && IMC <= 24.9) {
        res.innerHTML += `${IMC}, você está no peso ideal. Parabens!!!!!!!`
    }
    else if(IMC >= 25  && IMC <= 29.9) {
        res.innerHTML += `${IMC}, você está Sobrepeso.`
    }
    else if(IMC >= 30 && IMC <= 34.9) {
        res.innerHTML += `${IMC}, você está em obesidade grau 1.`
    }
    else if(IMC >= 35 && IMC <= 39.9) {
        res.innerHTML += `${IMC}, você está em obesidade grau2. Se cuide!!!`
    }
    else if(IMC >= 40) {
        res.innerHTML += `${IMC}, você está em obesidade grau3. Procure urgentemente um médico!!!!!!!!!!!`
    }
  
}





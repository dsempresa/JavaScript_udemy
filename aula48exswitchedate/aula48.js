function dataDeHoje(dataExata) {
    let hoje 
switch (dataExata){
    case 0:
        hoje = 'Domingo'
        return hoje
    case 1:
        hoje = 'Segunda'
        return hoje
    case 2:
        hoje = 'Terça'
        return hoje
    case 3:
        hoje = 'Quarta'
        return hoje
    case 4:
        hoje = 'Quinta'
        return hoje
    case 5:
        hoje = 'Sexta'
        return hoje
    case 6:
        hoje = 'Sábado'
        return hoje
    default:
        hoje = ' '
        break;
}

}

const data = new Date()
let diaSemana = data.getDay()
const hoje = dataDeHoje(dataExata)
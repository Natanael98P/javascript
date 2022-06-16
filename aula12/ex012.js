var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if(hora <= 12 && hora >= 6){
    console.log('Bom dia')
}
else if(hora <= 19 && hora >= 13){
    console.log('Boa tarde!')
}
else if(hora <= 24 && hora >= 20){
    console.log('Boa noite!')
}
else if (hora <= 5 && hora >= 1 || hora == 0){
    console.log('Boa madrugada!')
}

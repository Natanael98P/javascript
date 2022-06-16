
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'cafe_manha.jpg'
    }
    else if (hora>= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#c89b61'
    }
    else{
        img.src = 'noite.jpg'
        document.body.style.background = '#726161'
    }
}
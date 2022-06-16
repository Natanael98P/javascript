function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/menino.jpg')
            }
            else if(idade < 21){
                img.setAttribute('src', 'imagens/moço_jovem.jpg')
            }
            else if(idade < 60){
                img.setAttribute('src', 'imagens/homem.jpg')
            }
            else{
                img.setAttribute('src','imagens/idoso.jpg')
            }
        }
        else if(fsex[1].checked){
            genero = 'mulher'
        }
        if (idade >=0 && idade < 10){
            img.setAttribute('src', 'imagens/menina.jpg')
        }
        else if(idade < 21){
            img.setAttribute('src', 'imagens/moça_jovem.jpg')
        }
        else if(idade < 60){
            img.setAttribute('src', 'imagens/mulher.jpg')
        }
        else{
            img.setAttribute('src','imagens/idosa.jpg')
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}
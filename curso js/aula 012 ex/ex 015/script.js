function verificar () {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','fotocriançam.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','fotojovemm.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src','fotoadultom.png')
            } else  {
                //idoso
                img.setAttribute('src','fotoidosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','fotocriançaf.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','fotojovemf.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src','fotoadultof.png')
            } else  {
                //idoso
                img.setAttribute('src','fotoidosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
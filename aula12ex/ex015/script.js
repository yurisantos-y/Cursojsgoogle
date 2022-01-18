function verificar() {
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade <10 ) {
                // Crianca
                img.setAttribute('src', 'criancaH.png')
            } else if (idade <21) {
                // jovem
                img.setAttribute('src', 'jovemH.png')
            } else if (idade <50) {
                // Adulto
                img.setAttribute('src', 'adultoH.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosoH.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade <10 ) {
                // Crianca
                img.setAttribute('src', 'criancaM.png')
            } else if (idade <21) {
                // jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade <50) {
                // Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosaM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
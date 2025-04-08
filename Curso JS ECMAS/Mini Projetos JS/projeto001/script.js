function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var horario = hora + ":" + minuto
    msg.innerHTML = `Horairo atual ${horario}`

    if (hora >= 0 && hora < 12) {
        img.src = `model/manha.png`
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18) {
        img.src = `model/tarde.png`
        document.body.style.background = '#b9846f'
    }else {
        img.src = `model/noite.png`
        document.body.style.background = '#515154'
    }
}


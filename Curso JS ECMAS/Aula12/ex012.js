var currentDate = new Date()

const hora = currentDate.getHours()

console.log(`Agora sao exatamente ${hora} horas.`)

if (hora < 12) {
    console.log(`Bom Dia!`)
} else if (hora <= 18) {
    console.log(`Boa Tarde`)
} else {
    console.log(`Boa Noite!`)
}
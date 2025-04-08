let amigo = {nome: 'Guilherme',
    sexo: 'M',
    peso: 72,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
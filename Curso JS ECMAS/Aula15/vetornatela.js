let valores = [5, 2, 9, 7, 9, 1]

console.log(valores.indexOf(9))
valores.sort()

console.log(valores)

/*for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}




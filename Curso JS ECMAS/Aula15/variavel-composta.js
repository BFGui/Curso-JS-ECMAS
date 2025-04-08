let num = [5, 9, 2, 7, 3]

num[3] = 6

num.push(10)

console.log(`Nosso vetor e o ${num} e o seu tamanhho e ${num.length}`)

console.log(`O primeiro valor do vetor e ${num[5]}`)

for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
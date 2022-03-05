const futuro = Date.now() + 1000
let quantidade = 0

while(Date.now() < futuro){
    quantidade++
}

console.log(`quantidade: ${quantidade}`)
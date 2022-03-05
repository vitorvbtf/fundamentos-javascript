const saque = 2500
const saldo = 2000

let saqueAutorizado
saldoExtra = saldo + 1000

if (saque < saldo) {
    saqueAutorizado = "o saque foi autorizado"
} else if (saldoExtra >= saque) {
    saqueAutorizado = "o saque foi autorizado, entretanto tivemos que pegar um empréstimo de 1000 reais"
}
console.log(saqueAutorizado)






for(let i = "#"; i <= "######"; i += "#") {
    console.log(i)
}
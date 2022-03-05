function criarData(dia, mes, ano){
    return {
        dia,
        mes,
        ano,
        exibir(){
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}
const d1 = criarData(02,12,2021)
const d2 = criarData(09,10,2022)
const d3 = criarData(15,12,2020)

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())

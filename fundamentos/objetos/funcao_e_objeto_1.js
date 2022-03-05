function criarData(dia, mes, ano){
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibirData: function(){
            return `${this.dia}/${this.mes}/${this.ano}`
        } 
    }
}
const d1 = criarData(20, 10, 2021)
const d2 = criarData(15, 02, 2022)
const d3 = criarData(2, 9, 2020)

console.log(d1.exibirData())
console.log(d2.exibirData())
console.log(d3.exibirData())


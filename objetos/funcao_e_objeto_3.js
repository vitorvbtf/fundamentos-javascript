//função construtora (classe) -> objeto
function Data(dia, mes, ano){
    this.dia = dia,
    this.mes = mes,
    this.ano = ano,
    this.exibirData= function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(2, 10, 2021)
const d2 = new Data(2, 5, 2021)
const d3 = new Data(1, 1, 2021)

console.log(d1.exibirData())
console.log(d2.exibirData())
console.log(d3.exibirData())

console.log(d1)
console.log(d2)
console.log(d3)

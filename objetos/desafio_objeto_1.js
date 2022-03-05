const data = {
    dia: 20,
    mes: 10, 
    ano:2021,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
console.log(data.exibirData())


function executar(param){
    if(typeof param === "function"){
        console.log(param()) // <== parte central da aula
    }
}

function bomDia(){
    return 'bom dia'
}

executar(3)
executar(bomDia) // <== parte central da aula

const x = bomDia()
const y = bomDia

console.log(x)
console.log(y())

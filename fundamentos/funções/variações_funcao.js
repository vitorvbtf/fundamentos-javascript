//#1: função COM parâmetro e COM retorno
function somar(a, b){
    return a + b
}
let resultadoDaSoma = somar(5, 3)
console.log(resultadoDaSoma)

//#2: função COM parâmetro e SEM retorno
function multiplicacao(a, b){
    console.log(a * b)
}
multiplicacao(1, 7)

//#3: função SEM pârametro e com retorno
function subtrair(){
    return 4 - 3
}
console.log(subtrair())

//#4: função SEM pârametro e SEM retorno
function divisao(){
    console.log(6 / 2)
}
divisao()

function executar(fn, n1, n2){
    if(typeof fn === 'function'){
        console.log(fn(n1, n2))
    }
}

function somar(a, b){
    return a + b 
}

function subtrair(a, b){
    return a - b 
}

function multiplicar(a, b){
    return a * b 
}

executar(somar, 10, 15)
executar(subtrair, 10, 15)
executar(multiplicar, 10, 15)

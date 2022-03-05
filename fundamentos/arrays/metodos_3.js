const numeros = [1, 2, 3, 4, 5, 6, 9]

let linha = ''
function elementoParaCadaNumero(elemento, indice, array){
    console.log(elemento, indice, array += linha )
}
numeros.forEach(elementoParaCadaNumero)

numeros.forEach(function(_, i){
    console.log(i)
})

numeros.forEach(function(el){
    console.log(el)
})

//for(let n of numeros){
//    console.log(n)
//}

//for(let n = 0; n <= numeros.splice; i++){
//    console.log(n)
//}
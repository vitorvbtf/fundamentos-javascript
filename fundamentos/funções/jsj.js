const notas = [1, 2, 3, 4, 5, 6 ]

function elementoParaCadaNumero(elemento, indice, array){
    console.log(elemento, indice, array)
}

notas.forEach(elementoParaCadaNumero)

notas.forEach(function(elemento, indice, array){
    console.log(elemento, indice, array)
})
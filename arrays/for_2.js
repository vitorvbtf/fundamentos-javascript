const notas = [10, 9, 6, 3, 7, 9]

let valores = ''
//foreach
for(let nota of notas){
    valores += nota + ' '
}
console.log(valores)


let linha = ''
for(let indice in notas){
    linha += indice + ' '
}
console.log(linha)

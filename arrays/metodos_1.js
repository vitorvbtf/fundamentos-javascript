const numeros = [1, 2, 3, 4, 5]

numeros[0] = 100 // (essa é a forma de 
// adicionar um número no 
// local que você queira)
numeros.push(6) // (você adicona um elemento 
// no array)
console.log(numeros.indexOf(5))//(indica qual
// posição esse numero está)
console.log(numeros.join(' - '))//(adiciona
// alguma string para poder organizar 
// o seu array

numeros2 = numeros.concat(7, 8)
//concatena mais elementos, mas é 
//recomendado criar outra variavel junto
console.log(numeros2.join(" / "))

console.log(numeros.includes(7))
//indica se tem esse elemento no array
console.log(numeros2.includes(7))

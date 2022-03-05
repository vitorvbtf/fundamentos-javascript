function sempreRetornaUm(){
    return 1
}

function textoOuNumero(retornarTexto){
    if(retornarTexto){
       return 'sou um texto!'
    }else{
        return 123
    }
}

console.log(sempreRetornaUm())

//let texto = textoOuNumero(true)
console.log(textoOuNumero(true))

let numero = textoOuNumero(false)
console.log(numero)


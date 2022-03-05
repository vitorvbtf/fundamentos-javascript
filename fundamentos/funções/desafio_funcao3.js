const nota1 = 7.8
const nota2 = 3.1
const nota3 = 6.7

function menorNota(n1, n2){
    if(n1 <= n2){
        return n1 
    }else{
        return n2
    }
}

function somaDeDuasNotas(n1, n2, n3){
    if(menorNota(nota1, nota2) < n3){
        return n1 + n3
    }else{
        return n1 + n2
    }    
}

function media(){
    return somaDeDuasNotas(nota1, nota2, nota3) / 2
}

let resultadoDaMedia = media

function resultadoDoAluno(){
    if (resultadoDaMedia() > 7){
        return 'você foi aprovado!'
    } else {
        return 'você está de recuperação'
    }
}

let mensagemParaAluno = resultadoDoAluno()
console.log(mensagemParaAluno)
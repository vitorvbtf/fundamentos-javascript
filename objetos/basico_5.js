const cliente = {
    codigo: 1632,
    nome: 'vitor',
    endereco:{
        estado: 'DF',
        cidade: 'taguatinga',
        pontosDeReferencia:[
            {local:'proximo ao hospital', muitoProximo: true},
            {local:'proximo a escola', muitoProximo: false}
        ]  
    },
    nomeFilhos: ['duda', 'fernanda', 'joao']
}

console.log(cliente.nomeFilhos)
console.log(cliente.endereco.pontosDeReferencia[0].muitoProximo)
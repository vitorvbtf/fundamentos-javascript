const produto = {
    nome: 'ipad',
    preco: 989,
    desconto: 0.10,
    precoComDesconto: function(){
        return this.preco * (1 - this.desconto)
    }
}
console.log(produto.precoComDesconto())
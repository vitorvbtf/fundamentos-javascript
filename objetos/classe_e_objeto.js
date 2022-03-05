class aniversario{
    data = '10/09'
    local = 'casa'
    aniversariante = 'vitor'

    constructor(data = '10/09' , local = 'casa', aniversariante = 'vitor'){
        this.data = data
        this.local = local
        this.aniversariante = aniversariante
    }

    exibir(){
        return `a data do aniversario do ${this.aniversariante} é ${this.data},na ${this.local} dele`
    }
    
}

const convite = new aniversario( )
console.log(convite.exibir())
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataqueTipo()}`)
    }

    ataqueTipo(){
        if (this.tipo == "mago"){
            this.tipo = "usou magia"
        } else if (this.tipo == "guerreiro"){
            this.tipo = "usou espada"
        } else if (this.tipo == "monge"){
            this.tipo = "usou artes marciais"
        } else if (this.tipo == "ninja"){
            this.tipo = "usou shuriken"
        }
        return this.tipo
    }
}


let tipoHeroi = new heroi("Emanuel", "28", "guerreiro")

tipoHeroi.atacar()
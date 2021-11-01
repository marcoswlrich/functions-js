//Funções Fábrica - factory function
//this

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    //Setter

    set nomeCompleto(valor) {
      valor = valor.split(' ') // transforma as strings em vetor
      this.nome = valor.shift() // pegar o primeiro elemento do vetor e retira
      this.sobrenome = valor.join(' ') // junta os elementos do vetor
    },

    fala(assunto) {
      return `${this.nome} está ${assunto}`
    },

    altura: altura,
    peso: peso,
    // getter - pra envocar não precisa usar imc() - get faz da função fingi atributo da classe
    get imc() {
      const indice = this.peso / this.altura ** 2
      return indice.toFixed(2)
    }
  }
}

let pessoa1 = criaPessoa('Marcos', 'Wlrich', 1.84, 78)
console.log(pessoa1.imc)
const pessoa2 = criaPessoa('Ana', 'Maria', 1.7, 45)
console.log(pessoa2.imc)
pessoa1.nomeCompleto = 'Maria Jesus Pedro'
console.log(pessoa1.nomeCompleto)

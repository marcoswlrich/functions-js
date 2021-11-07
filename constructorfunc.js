// função construtora -> cria e retorna retorna objetos
// função fabrica -> cria e retorna objetos
// construra => Pessoa (new)

function Pessoa(nome, sobrenome) {
  //atributos ou métodos privados
  const id = 123456
  const metodoInterno = function () {}
  //atributos ou métodos públicos
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = function () {
    console.log(this.nome + ': sou um método')
  }
}

const p1 = new Pessoa('Marcos', 'Wlrich')
const p2 = new Pessoa('Dani', 'Sulek')
p2.metodo()

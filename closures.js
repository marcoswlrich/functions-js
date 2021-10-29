function retornaFuncao(nome) {
  return function () {
    return nome
  }
}

const funcao = retornaFuncao('Marcos')
const funcao2 = retornaFuncao('Wlrich')

console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), funcao2())

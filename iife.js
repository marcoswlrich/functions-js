// IIFE -> Immediately invoked function expression

;(function (idade, peso, altura) {
  const sobrenome = 'Wlrich'
  function criaNome(nome) {
    return nome + ' ' + sobrenome
  }

  function falaNome() {
    console.log(criaNome('Marcos'))
  }

  falaNome()
  console.log(idade, peso, altura)
})(30, 80, 1.84)

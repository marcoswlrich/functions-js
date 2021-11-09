function* geradora1() {
  //código qualquer ....
  yield 'Valor 1'
  //código qualquer ....
  yield 'Valor 2'
  //código qualquer ....
  yield 'Valor 3'
}

const g1 = geradora1()
console.log(g1) //mostra na tela objeto gerador
console.log(g1.next()) // mostra o objeto com duas chaves
console.log(g1.next().value) //mostra o primeiro valor
console.log(g1.next().done) // mostra falso porque ainda falta mais valores para ser gerados
console.log(g1.next().value) //mostra o segundo valor
console.log(g1.next().value) //mostra o terceiro valor

//outra forma de gerar os valores da função

for (let valor of g1) {
  console.log(valor)
}

//Outros exemplos

function* geradora2() {
  yield 0
  yield 1
  yield 3
}

function* geradora3() {
  yield* geradora2()
  yield 3
  yield 4
  yield 5
}

const g2 = geradora3()
for (let valor of g2) {
  console.log(valor)
}

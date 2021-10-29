//arguments que sustenta todos os argumentos enviados

function conta(operador, acumulador, ...numeros) {
  for (let num of numeros) {
    if (operador === '+') acumulador += num
    if (operador === '-') acumulador -= num
    if (operador === '/') acumulador /= num
    if (operador === '*') acumulador *= num
  }
  console.log(acumulador)
}

conta('-', 200, 20, 30, 40, 50)

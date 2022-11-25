/*# Exercício 3 */

/*a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
*/
//SOMA
function somar (parametro1, parametro2){
    return parametro1 + parametro2
}
let number1 = Number (prompt("Informe um valor"))
let number2 = Number (prompt("informe outro valor"))

let resultado = somar(number1, number2)
console.log("A soma foi de: " + resultado)

//SUBTRACAO
function subtrair (parametro3, parametro4){
    return parametro3 - parametro4
}
let number3 = Number (prompt("Informe um valor"))
let number4 = Number (prompt("informe outro valor"))

let resultado1 = subtrair(number3, number4)
console.log("A soma foi de: " + resultado1)

//MULTIPLIACAO
function multiplicar (parametro5, parametro6){
    return parametro5 * parametro6
}
let number5 = Number (prompt("Informe um valor"))
let number6 = Number (prompt("informe outro valor"))

let resultado2 = multiplicar(number5, number6)
console.log("A soma foi de: " + resultado2)

//DIVISAO
function dividir (parametro7, parametro8){
    return parametro7 / parametro8
}
let number7 = Number (prompt("Informe um valor"))
let number8 = Number (prompt("informe outro valor"))

let resultado3 = dividir(number5, number6)
console.log("A soma foi de: " + resultado3)

/*RESOLUCAO A) Criei uma funcao com dois parametros numericos, criei duas variaveis para prompt para o usuario inserir o valor e ficar guardado nas variveis, criei mais uma variavel para somar os parametros e um console para retornar o valor somado.
*/

/*b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
*/

const armazem = Number (prompt("Digite um valor e será guardado"))
const armazem1 = Number (prompt("Digite mais um valor para guardar"))
console.log("você armazenou os numeros: " + armazem, + armazem1)

/*RESOLUCAO: B) Criei dois prompt para o usuario digitar o valor a ser guardado e um console para mostrar que foi guardado os numeros certos.
*/

/*c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
*/



/*d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
*/
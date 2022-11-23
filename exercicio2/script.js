function exercicio2 (number1, number2) {
    const resultado = (number1+number2)
    
    return `${resultado}`


}
console.log(exercicio2 (100 , 50))


function exercicioB (number1, number2) {
    const resultadoB = (number1>=number2)
    
    return `${resultadoB}`


}
console.log(exercicioB (300 , 200)) 


function exercicioC (number1) {
    const resultadoC = (number1%2===0)
    
    return `${resultadoC}`


}
console.log(exercicioC (20)) 


function exercicioD (salario1) {
    const inss = (salario1 - (salario1*0.1))
    
    return (`O salario sera: ${inss} reias.`)


}
console.log(exercicioD (1000))






/*# Exercício 2
Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  
*/
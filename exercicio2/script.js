/*# Exercício 2
Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
*/

alert("Olá, caro professor, avalie com carinho meus exercícios.")

function somar (parametro1, parametro2) {
    
    return parametro1+parametro2
}
let num1 = parseFloat (prompt("Digite um numero"))
let num2 = parseFloat (prompt("Digite outro numero"))

let resultado = somar(num1, num2)

console.log("A soma foi: ", + resultado)

/*RESOLUÇÃO: A) Declarei uma função com dois parametros, pedi ao "cliente/usuario" que digitasse os parametros para invocar a function e retornar o resultado no console. 
*/

/*b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
*/

let valorMaior = maior (5,8)
console.log(valorMaior)
function maior (number1, number2) {
        return number1>=number2 ? number1: number2 
}
/* if(number1 >= number2)
        return number1
        return number2
RESOLUÇÃO: B) Informei dois números na function para era me retornar qual era o maior. Usei um código mais enxuto, mas logo a baixo coloquei em comentário outra forma de resolver a operação, ambas retornam o mesmo resultado. 
*/


/*c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.
*/

function parImpar (resposta){
    if (resposta %2===0)
        return "PAR"
   else 
    return "IMPAR"
}

let resposta = parImpar(20)

console.log(resposta)
/*
RESOLUÇÃO C) Informei um número na variável let que serviu de "argumento" para a função, e usei o molde para me retornar o booleano par ou impar.
*/

/*
d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS. 
*/

function salarioComDesconto (salario){
    const inss = (salario - (salario*0.1))
    return (`O salario de 10.000,00, com desconto de 10% será de: ${inss},00 reais`)

}
console.log(salarioComDesconto (10000))
 /*
 RESOLUÇÃO: D) No console coloquei o salario que teria que ser descontado 10% do INSS, usei a function basica para resolver, usando o numero no console*0.1, e retornou o valor calculado.



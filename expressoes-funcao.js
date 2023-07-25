// Declaração de Função

function minhaFuncao(param) {
    // bloco de código    
}

minhaFuncao("param")

// Expressão de função

// const soma = function(num1,num2) {return num1 + num2}
// console.log(soma(1,2))

// Diferença Principal: Hoisting
// funções e var são "listadas" no topo

console.log(apresentar())

function apresentar() {
    return "olá"
}

console.log(soma(1,1))
const soma = function (num1, num2) { return num1 + num2 }
function apresentar(nome) {
    return `Meu nome é ${nome}`;        
}

// Arrow Function

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (numero1, numero2) => numero1 + numero2;

// Arrow Function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somnete número de 1 a 9"
    } else {
        return num1 + num2
    }
}

// Hoisting: arrow function se comporta como expressão

// Operador maior ou igual que 
// >=
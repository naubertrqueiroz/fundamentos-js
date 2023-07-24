const texto1 = "Olá mundo";
const texto2 = 'Olá mundo';
const senha = "senhasupersegura123!";
const StringNumeros = "34567";
const citacao = 'Meu nome é ';
const meu_nome = "Naubert"

// concatenação (+)

console.log(citacao + meu_nome) 

// Codificação de Strings

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)



// Trabalhando com Strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";


const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

console.log(cidade === input); // false

// Contar texto

const senha_new = "minhaSenha123";
console.log(senha_new.length); // 13 caracteres


// template string Ou template literal 


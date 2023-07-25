// Parâmetros de função
              //2  //2
function soma(num1,num2) {
    return num1+num2; 
}

// console.log(soma(2,2))
// console.log(soma(245, 20))
// console.log(soma(2, -500))
// console.log(soma(4, 1))

// Parâmetros X Argumentos

// ordem de parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade}`;
}

// console.log(nomeIdade(40,"Joao"))

function multiplica(numero1 = 1, numero2 = 1)  {
    return numero1 * numero2    
}
                            //9      //6
console.log(multiplica(soma(4,5),soma(3,3)))

                            //9
console.log(multiplica(soma(4, 5)))
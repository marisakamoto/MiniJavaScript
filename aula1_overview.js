// Comentário de linha

/*
Comentário de bloco...
Veja, pode ter quebra de linha.
*/

// Variáveis
var noun = 'Mari Sakamoto'
var age = 28

var lista_mercado = ['banana', 'cashew', 'passionfruit']

var total = 10.43

console.log("Hello, my name is ", noun, "and I am ", age, " years old")
console.log("My favorite food are", lista_mercado[0],",", lista_mercado[1],"and", lista_mercado[2] )
console.log(noun.length)

console.log(noun.toUpperCase())
console.log(noun.toLowerCase())
console.log(noun, noun.replace("Mari", "Ana"))

// Operadores
console.log(age > 18)
// Condicional
if(age >=18){
    console.log("Old enough")
} else {
    console.log("Under age")
}
// Loop
for(i in lista_mercado){
    console.log(lista_mercado[i])

}

// Funções

// 
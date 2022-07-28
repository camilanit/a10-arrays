let numeros = [3,4,5,1,2]

let strings = ["banana","morango","carambola"]

let mista= [1,"casa", true,"carro",8]

let copiaArrayNumeros = numeros.slice()
// console.log(copiaArrayNumeros)

let copiaArrayStrings = strings.slice()
// console.log(copiaArrayStrings)

let copiaArrayMista = mista.slice()
// console.log(copiaArrayMista)

copiaArrayNumeros.push(6)
console.log("original",numeros)
console.log("copia",copiaArrayNumeros)

copiaArrayStrings.pop()
console.log("original",strings)
console.log("copia", copiaArrayStrings)

copiaArrayMista.splice(1,1)
console.log("original",mista)
console.log("copia", copiaArrayMista)




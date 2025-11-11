const name = "yash"
const age = 21

console.log(name + age + " learning")

console.log(`Hello my name is ${name} and my age is ${age}`)

const gameName = new String('yash')
console.log(gameName[0])


console.log(gameName.length)
console.log(gameName.toUpperCase)
console.log(gameName.toUpperCase())
console.log(gameName.charAt('2'))
console.log(gameName.indexOf('s'))

//gives subst
const newString = gameName.substring(0,2)
console.log(newString)

//slices 
const anotherString = gameName.slice(-2,-1)
console.log(anotherString)

//trims extra spaces, there is trim.end or start also
const newStringOne = "   yash  "
console.log(newStringOne)
console.log(newStringOne.trim())

//we can replace anything using .replace('to be replaced', 'what to be replaced') 
const url = "https://yash.com/yash%20singhal"
console.log(url.replace('%20', '**8'))

//check if it has that keyword or not
console.log(url.includes('yash'))

//split splits up the thing  based on the instr
console.log(url.split('/'))



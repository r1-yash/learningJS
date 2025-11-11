//arrays further lectture 15

const arr1 = ["a", "b", "c"]
const arr2 = ["d", "e", "f"]

//arr1.push(arr2)
console.log(arr1)
//console.log(arr1[3][1])

const sumArr = arr1.concat(arr2)
console.log(sumArr)

const newSum = [...arr1, ...arr2]
console.log(newSum)

const stackArr = [1,2,3, [4,5,6, [7,8,9]]]
const flatArr = stackArr.flat(Infinity)
console.log(flatArr)

console.log(Array.isArray("Yash"))
console.log(Array.from("Yash"))
console.log(Array.from({name: "Yash"})) //v.v important for INTERVIEW

let score1 = 100
let score2 = 200

console.log(Array.of(score1, score2))
//23ss

function neww(){
    let name = "Yash"
    console.log(this.name);
}
neww() //got undefined, why ? because context works only within the function

const learnArrow = () =>{
    let name = "Yash"
    console.log(this.name);
}

learnArrow()

//shorter form using it, no need to have return V.V improtant when writing it like this
const addTwo = (num1,  num2) => (num1+num2)

console.log(addTwo(3,4))

const ts = (name) => ({userName: " yash"})
console.log(ts())
//so it needs to be wrapped in brackets to be returned as objects 
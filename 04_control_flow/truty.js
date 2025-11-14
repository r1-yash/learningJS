

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("This is empty");
}
//so here, we made it into array using object.keys and then calculated its length

// ?? this is my null coal.. operator, it gives null or undefined as default 

let val1;

val1 = null ?? 20
// val1 = undeined ?? 20
// val1 = null ?? 20 ?? 10 .. it will print 20

console.log(val1);

const chicken = 100

chicken > 80 ? console.log("expensive") : console.log("cheap");
// 29 - high order array loops

const greeting  = "Hello world"

for(const greet of greeting){
    //console.log(greet);
}

const map = new Map()

map.set('1', "one")
map.set('2', "two")
map.set('3', "three")

console.log(map);

for(const [key, value] of map){
    console.log(key, '->', value);
}
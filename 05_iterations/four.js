//high ordera ray loops

const myObj = { 
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}

for (const key in myObj) {
    console.log(`${key} is short for ${myObj[key]}`)
}
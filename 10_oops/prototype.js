//LECTURE 41

// let myName = "Yash    "

// console.log(myName.trueLength);

let myHero = [ "thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.yash = function(){
    console.log(`Yash is present in all objecs`);
} 

//so what we did here is we gave the object a custom function of yash. so now everythinbg referncing to that wil have yash as a method
heroPower.yash() 

Array.prototype.yash2 = function(){
    console.log(`strings, array, or stuff can also be given custom methods`);
}
myHero.yash2() //here we gave power only to arrayt




//===============================

const User ={
    name: "Yash"
}

const Teacher = {
    makeVid: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssign: 'JS',
    isFullTime: true,

    __proto__ : TeachingSupport
}

Teacher.__proto__ = User //outdated appraoch


//better apprach

Object.setPrototypeOf(TeachingSupport,Teacher)



let anotherUsername = "Yash     "

String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`True lgnth is ${this.trim().length}`);
}

anotherUsername.trueLength()

"yoyyo   ".trueLength()
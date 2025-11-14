//accumulator

// const myNums = [1,2,3]
// const myTotal = myNums.reduce( (acc, currVal) => {
//     console.log(`${acc} its my acc and ${currVal} is my currVal`);
//     return acc + currVal
// }, 0) //the 0 here is to tell where to start from 

//console.log(myTotal);


//real world example for the same 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
},0)

console.log(total);
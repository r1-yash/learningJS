const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map( (val) =>{
    return val = val+10
})

console.log(newNums);

const bigNum = myNums
                .map( (val) => val = val*10)
                .map( (val) => val = val+1 )


console.log(bigNum);
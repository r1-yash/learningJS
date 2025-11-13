 //video 22

 function one(){
    const userName = "Yash"

    function two(){
        const webSite = "Youtube"
        console.log(userName + webSite)
    }
    two()
   // console.log(webSite), error 1 will be here coz website is declared elsewhere
 }

one()
 //console.log(userName); error 2, block scope 

 //++++++++++++++++++++ declaring functions++++

 console.log(addOne(5))
 function addOne(nums){
    return nums+1
 }

 console.log(addTwo(6))
 const addTwo = function(num){
    return num+2
 }
// console.log(addTwo(6)), throws an error when above function 
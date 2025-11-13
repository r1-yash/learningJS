//24, IIFE 
//so what is IIFE used for :- 
                        // 1) immediate execution function
                        // 2) to prevent problem from the pollution of global scope
                    

(function chai(){ //this is named IIFE
    console.log(`DB CONNECTED`)
})(); //SYNTAX
     //here the extra bracket wrapping the whole function makes a block we learnt in last lesson over the twoSum examplke
    //and the extra pair of brackets () is the IIFE 
    // the semi-colon to tell editor thgat it has ended

( (name) => {
        console.log(`DB2 connected to ${name}`);
})('YASH');


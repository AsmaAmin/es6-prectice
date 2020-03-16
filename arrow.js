///arrow function///
////ES-5 ////
//1st type//
function doubleIt(num){
    return num*2;
}

const result = doubleIt(10);
console.log(result);



//Another Type ///
const doubleIt2 = function(num2){
    return num2 *3;
}
const result1 = doubleIt2(10);
console.log(result1);


/////ES_6////

const doubleIt3 = num3=>num3*4;
const result3 = doubleIt3(10);
console.log(result3);

///more than 1 parameter
const add=(x,y) =>x+y;
const result4 = add(40,50);
console.log(result4);

/// empty parameter
const empty = () =>50;
const result5 = empty();
console.log(result5);

///multi work in one function
const doMath=(x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result; 
}

const result6 =doMath(10,8);
console.log(result6);
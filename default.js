/// ECMASCRIPT -5 START/////

// here have no default value
 function add (num1, num2){
     return num1 + num2;
 }

 const result1 = add(15)
//console.log(result);

// here have value
function add (num1, num2){
    return num1 + num2;
}

const result2 = add(15,20)
//console.log(result);

// ES5 default value set
function add (num1, num2){
    if(num2 == undefined){
        num2 = 0;

    }
    return num1 + num2;
}

const result3 = add(15)
console.log("r3 " + result3);

// ES5 default(shortcut) value set
function add (num1, num2){
   num2 = num2 || 0;
    return num1 + num2;
}

const result4 = add(15)
console.log("r4 " + result4);



//////ECMAScript -6 Start////

// ES6 default value set
function add (num1, num2=20){
   
     return num1 + num2;
 }
 
 const result5 = add(15)
 console.log("r5 " + result5);

 // ES6 default value and given value set
function add (num1, num2=20){
   
    return num1 + num2;
}

const result6 = add(15, 3)
console.log("r6 " + result6);
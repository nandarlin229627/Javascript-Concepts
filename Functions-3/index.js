//********** No Return Statement Function **********
function calculateAge(birthYear){
    let currentYear = new Date().getFullYear();

    if(birthYear > currentYear){
        console.log("Birthyear can't be greater than current year.");
    }else if(birthYear <= 0){
        console.log("Birthyear can't be less than or equal to zero.");
    }else{
        return currentYear-birthYear;  
    }   
}
let result1 = calculateAge(0);
console.log("Your age is " + result1);//Your age is undefined

let result2 = calculateAge(-1);
console.log("Your age is " + result2);//Your age is undefined

let result3 = calculateAge(2070);
console.log("Your age is " + result3);//Your age is undefined

let result4 = calculateAge(2000);
console.log("Your age is " + result4);//Your age is 23




//********** Default & Rest Parameter **********
// function add(a,b){
//     console.log(a+b);
// }
//     add(2);//NaN

//Default parameter
function add(a,b=0){
    console.log(a+b);//2
}
    add(2);

//Rest Parameter
function test(a,b,...c){
    console.log(c);//3,4,5
}
    test(1,2,3,4,5);




//********** Function Statement and Expression **********
function sayHi(){
    console.log("This is Function Statement");
}
sayHi();

// sayHi2();//error
let sayHi2 = function(){
    console.log("This is Expression");
}
sayHi2();




//********** Callback Function **********
function twice(num,modifier){
    let result = modifier(num)*2;//22
    console.log(result);
}

twice(5, function(num){
    return num+6;
});




//********** Arrow Function ********** 3 advantages
// let arrow_function = () => {
//     console.log("This is arrow function");
// }

// arrow_function();

//no require {}
let arrow_function1 = () => console.log("This is arrow function1");
arrow_function1();

//no require "return"
let arrow_function2 = (word) => word;
console.log(arrow_function2("This is arrow function2"));

//no require "()"
let arrow_function3 = word => word;
console.log(arrow_function3("This is arrow function3"));

// let twice_arrow_function = (num) => { 
//     return num*2;
// }
// console.log(twice_arrow_function(3));

let twice_arrow_function = num => num*2;
console.log(twice_arrow_function(3));
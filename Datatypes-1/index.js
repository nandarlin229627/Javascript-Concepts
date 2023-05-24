// ********** String Data types **********
//three types -string datatypes
let type1 = "Nandar Linn";
let type2 = 'Nandar Linn';
let type3 = `Nandar Linn`;

let sayHi = `Hi there ${type2}`;
// let sayHi = "Hi there " + type1;
console.log(sayHi);

let time1 = '3 0\'clock';
let time2 =  "3 o'clock";
console.log(time1);
console.log(time2);


//********** Number Datatypes(int & float) **********
let num1 = 10.5;
let num2 = 20;
console.log(num1+num2);//30.5

let str1 = "10";
let str2 = "20";
console.log(str1+str2);//1020


// ********** Boolean Datatypes **********
let myVar = true;
console.log(myVar);//true

let myName = "Nandar Linn";
console.log(Boolean(myName));//true
// Falsy values(6)
// 1.0
// 2.""
// 3.null
// 4.undefined
// 5.NaN
// 6.false

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(Boolean("false"));//true


// ********** (Null, Undefined, NaN)Special Datatypes **********
let x;
console.log(x);//undefined

let y = null;
console.log(y);//Null

let a;
let b = 3;
console.log(a + b);//NaN
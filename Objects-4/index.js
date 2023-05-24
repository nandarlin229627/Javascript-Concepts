//********** Insert & Retrieve & Nested Array **********
// two types - build array
let mixture = new Array('dog',22,"cat");
console.log(mixture);
console.log(mixture[0]);

let mixture2 = ['dog',33,"cat"];//more preferred
console.log(mixture2);
console.log(mixture2[2]);

//nested array
let arr =[
    [1,2,3],
    ["a","b","c"]
];

arr[0][2]="V";
console.log(arr);




//********** Spread Operator **********
console.log("Spread Operator");
let d1 = [1,2,4];
let d2 = [2,4,5];

let result = [d1,d2];
console.log(result);
let result2 = [...d1,...d2];//use spread operator
console.log(result2);

//spread operator in function
function add(a,b){
    console.log(a+b);
}
let nums = [1,2];
add(...nums);





//********** Destructuring **********
console.log("Destructuring");
let datas = ["nandar",22,"CU"];
let [name,age,school] = datas;
console.log(name,age,school);

//destructuring at function
function add2([a,b]){
    console.log(a+b);
}
add2([3,4]);





//********** Array Basic Methods **********
let animals = ['dog','cat','item1'];

animals.push('item1');
console.log(animals);

animals.pop();
console.log(animals);

animals.shift();
console.log(animals);

animals.unshift('item2');
console.log(animals);

//************
let index = animals.indexOf('dog');
console.log(index);

let index2 = animals.join('-');
console.log(index2);

let index3 = animals.splice(0,1);
console.log(index3);





//********** Array Map Method **********
let arr1 = [1,2,3,4,5];
arr1 = arr1.map((item) => {
    return item+100;
})
console.log(arr1);//[101, 102, 103, 104, 105]

let people = ['Su','Dar','Hsu'];
people = people.map((person) => {
    return 'Daw '+person;
});
console.log(people);






//********** Array Filter Method **********
let arr2 = [1,2,3,4,5];
arr_new = arr2.filter((item) => {
    return item!=2;
});
console.log(arr_new);






//********** Array Reduce Methods **********
let arr4 = [1,2,3,4,5];
arr4_new = arr4.reduce((prev,curr) => {
    return prev+curr;
});
console.log(arr4_new);






//********** Basic Refactoring Concept **********
// let array_old = [1,2,3,4,5];
// arr_new1 = array_old.map((item) => {
//     return item+100;
// })
// console.log(arr_new1);//[101, 102, 103, 104, 105]

// arr_new2 = array_old.filter((item) => {
//     return item!=2;
// });
// console.log(arr_new2);

// arr_new3 = array_old.reduce((prev,curr) => {
//     return prev+curr;
// });
// console.log(arr_new3);

//use basic refactoring concept
let array_old = [1,2,3,4,5,6];
arr_new1 = array_old.map(item => item+100);
console.log(arr_new1);//[101, 102, 103, 104, 105]

arr_new2 = array_old.filter(item => item!=2);
console.log(arr_new2);

arr_new3 = array_old.reduce((prev,curr) => prev+curr);
console.log(arr_new3);






//********** Everything is a object **********
let str = ' hello world again ';
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
let str_new = str.split(",");
console.log(str_new);





//********** How to create object **********
let person = {
    name:"John",
    age:22,
    // eat: function(){
    //     console.log("person is eating");
    // }
    eat(){
        console.log("person is eating");
    }
};

person.drink = function(){
    console.log("person is drinking");
};

console.log(person);
console.log(person.name);//dot notation
console.log(person['age']);//bracket notation when dynamic
person.eat();
person.drink();

//**********29. Scary this keyword **********



//**********30. Object Spread and Destructuring and Property Shorthand **********
let obj1 = {
    myname: "Nandar Lin",
    myage:24
}
let obj2 = {
    myHairColor:"black"
}

let obj3 = {... obj1,...obj2};//object spread
console.log(obj3);

// obj destructuring
let {name1,age1} = {
    name1:"nandar",
    age1: 24
}
console.log(name1);
console.log(age1);


//obj property shorthand
let name2 = "nandar";
let age2 = 24;
// let person2 = {
//     name2:name2,
//     age2:age2
// }
let person2 = {
    name2,
    age2
}//property shorthand
console.log(person2);





//**********31. Javascript Data Structure **********
let people3 =[
    {name3:"nandar",age3:24,gender:"female"},
    {name3:"sandar",age3:25,gender:"female"},
    {name3:"kyaw",age3:4,gender:"male"}
];

let searchKey= prompt('search person:');


let filterArray = people3.filter(person3 =>{
    // return person3.gender === 'male'
    return person3.name3.includes('s')
})
console.log(filterArray);

//**********32. Json 101 **********
console.log("JSON");
console.log(JSON.stringify(people3));//to JSON format
let people4 = JSON.stringify(people3);
console.log(JSON.parse(people4));//to JS format



// homework
let list = [5,7,8];
    for(item in list){
        console.log(`${item} "for .. in loop returns a list of keys on the object being iterated."`);
        console.log(list[item]); //5,7,8 (The key is used to access the value of the key).
    }
    //for .. in loop can be used for arrays because arrays are a special type of object.
    


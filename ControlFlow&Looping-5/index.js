//**********33&34 If & If Else **********
let people = [
    {name:'nandar',age:24,gender:'f'},
    {name:'sandar',age:2,gender:'m'},
    {name:'dar',age:2}
]

people = people.map(person => {
    if(person.gender === 'm') person.gender = 'male';//use coding styles
    else if(person.gender === 'f') person.gender = 'female';
    else person.gender = 'unknown';

    return person;
})

console.log(people);





//********** 35. Ternary Operator(use small espression) **********
let age = 20;
let permission = age > 18 ? "authorized" : "unauthorized";
console.log(permission);





//********** 36. Switch statement **********
let people1 = [
    {name:'nandar',age:24,gender:'f'},
    {name:'sandar',age:2,gender:'m'},
    {name:'dar',age:2}
]

people1 = people1.map(person1 => {
    switch(person1.gender){
        case 'm':
            person1.gender = 'male'
            break;
        case 'f':
            person1.gender = 'female'
            break;   
        default:
            person1.gender = 'unknown'
    }
    return person1;
})
   
console.log(people1)




//**********37. While Loop **********
let people2 = [
    'nandar',
    'sandar',
    'dar'
]

let x = 0;
while(x < people2.length){
    console.log(people2[x]);
    x++;
}





//********** 38.Do While & For Loop **********
let y = 0;
do{
    console.log('work');
    y++;
}while(y<3)

let people3 = [
    'nandar',
    'sandar',
    'dar'
]
for(let x1=0;x1<people3.length;x1++){
    console.log(people3[x1]);
}







//**********39. For of(array) and For in (object)**********
let list = [5,7,8];
    for(item in list){
        console.log(`${item} "for .. in loop returns a list of keys on the object being iterated."`);
        console.log(list[item]); //5,7,8 (The key is used to access the value of the key).
    }
    //for .. in loop can be used for arrays because arrays are a special type of object.

    for(item of list){
        console.log(item);//for... of loop returns values of the object
    }

    let people4 = [
        {name:'nandar',age:24,gender:'f'},
        {name:'sandar',age:2,gender:'m'},
        {name:'dar',age:2}
    ]
    

    for(person in people4){
        console.log(person);
        console.log(people4[person]);
    }







//********** 40.Scoping **********
// 1.global scope variable
// 2.local scope variable {}


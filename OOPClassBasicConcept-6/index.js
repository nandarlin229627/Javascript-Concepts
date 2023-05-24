//********** 41.How to create class(before object)**********
class Car{
    wheels = 4;
    color = "black";

    drive() {
        console.log("Car is driving");
    }
}
console.log(new Car);

let carOne = new Car;
console.log(carOne.wheels);

let carTwo = new Car;
console.log(carTwo);
//differ two object based on sae class







//**********42. OOP(use to build package) example and Static Property(no new and direct class name) **********
class Calculator{
    static PI = 3.14;
    PI2 = 3.14;
    plus(n1,n2){
        return n1+n2;
    }

    minus(n1,n2){
        return n1-n2;
    }

    multiply(n1,n2){
        return n1*n2;
    }

    division(n1,n2){
        return n1/n2;
    }

    reainder(n1,n2){
        return n1%n2;
    }
}

console.log(Calculator.PI2);//undefined
console.log(Calculator.PI);//3.14 because (use static property)(direct class name)
console.log(Math.PI);//build in Math class

let calculator = new Calculator;
console.log(calculator.plus(1,2));





//**********43. Static Method and this keyword in classes **********
class AreaCalculator{
    static PI = 3.14;
    static area(r){
        //return PI*r**2;//error because (should use this keyword)
        return this.PI*r**2;
    }
}

console.log(AreaCalculator.area(2));


//use this keyword
class VolumeCalculator{
    PI = 3.14;
    area(r){
        //return PI*r**2;//error because (should use this keyword)
        return this.PI*r**2;
    }

    volume(r,h){
        return this.area(r)*h;
    }
}

let volumeCalculator =new VolumeCalculator;
console.log(volumeCalculator.volume(2,3));






//**********44. Static Method main concept (static and this should not be used at the same)**********
// static = current class
// this = current object in class
class PersonCalculator{
    Name = 'casio';
    static info(){
        // let personCalculator = new PersonCalculator;//sta
        // console.log('My calculator is ' + personCalculator.name);

        console.log('My calculator is ' + this.Name);//undefined So, should build obj
    }
}

PersonCalculator.info();//static method










//**********45. Constructor(method (auto work & first work & to use sending data through parameter)) **********
class CarOne{
    constructor(name){
        console.log(name + " is driving");
    }
}

new CarOne('marcedes');
new CarOne('toyota');


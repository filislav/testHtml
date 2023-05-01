let date = new Date();
document.getElementById('date').innerHTML = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;

let arr = [9,8,2,3,5,7];
let arr1 = arr.sort();
console.log(arr1.join(","));

class Person{
    constructor(name,age,happyness){
        this.name = name;
        this.age = age;
        this.happyness = happyness;
    }
    
    info() {
        console.log(`${this.name},${this.age},${this.happyness}`); 
    };
}

let alex = new Person('Alex',19,true);
let bob = new Person('Bob',20,false);
alex.info();
bob.info();

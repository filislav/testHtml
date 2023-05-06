
// function createIncrementor(n){
//     return function(num){
//         return n+num;
//     }
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.log(addOne(3));
// console.log(addTen(3));

// function urlGenerator(dom){
//     return function(url){
//         return `https://${url}.${dom}`;
//     }
// }
// let com = urlGenerator('com');
// let ru = urlGenerator('ru');

// console.log(com('microsoft'));
// console.log(ru('yandex'));

function logPerson(){
    console.log(`Person : ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name:"Alex",age:26,job:"engeneer"};
const person2 = {name:"Elena",age:32,job:"cop"};

function bind(context,fn){
    return function(...args){
        return fn.apply(context,args);
    }
}
bind(person1,logPerson)();
bind(person2,logPerson)();


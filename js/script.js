function hello(){
    console.log('Hello',this);
}

const person = {
    name:'Slava',
    age:41,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job,phone){
        console.group(`${this.name} info`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

const lena = {
    name:"Lena",
    age:35
}
// person.logInfo.bind(lena,"Frontend","8-888-999")();
// person.logInfo.call(lena,"Frontend","8-888-999");
// person.logInfo.apply(lena,["Frontend","8-888-999"]);

let arr = [1,2,3,4,5];

Array.prototype.mult = function(n){
    return this.map((i)=>{
        return i*n;
    })
}
console.log(arr.mult(3));
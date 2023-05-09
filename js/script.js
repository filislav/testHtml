const person = Object.create({
    calculateAge(){
        console.log('Age:',new Date().getFullYear() - this.birthYear);
    }
},
{
    name:{
        value:'Slava',
        enumerable:true,
        writable:true,
        configurable:true,
    },
    birthYear:{
        value: 1982,
        enumerable:false,
        writable:true,
        configurable:false,
    },
    age:{
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(val) {
            //document.body.style.background ='red';
            this.birthYear = new Date().getFullYear() - val;
            console.log(this.birthYear);
        }
    }
});

// const person = {
//     name:'Slava',
//     birthYear: 1982
// }
console.log(person);
for(let key in person){
    console.log('Key',key,person[key]);
}
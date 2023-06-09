//objects
const person = {
    name:"Slava",
    age:23,
    job:"Fullstack"
}

const op = new Proxy(person,{
    get(target,prop){
        console.log(`Getting prop: ${prop}`);
        if(!(prop in target)){ //пример с несущ полем для вывода всех полей op.name_age_job вернет значения через пробел
            return prop.split('_').map(p=>target[p]).join(' ');
        }
        return target[prop];
    },
    set(target,prop,value){
        if(prop in target){
            target[prop] = value;
        }else{
            throw new Error(`No prop ${prop} in target`);
        }
    },
    has(target,prop){
        return ["name","age","job"].includes(prop);
    },
    deleteProperty(target,prop){
        console.log(`Deleting ....`,prop);
        delete target[prop];
        return true;
    }
})

//functions
const log = text =>`Log: ${text}`;

const fp = new Proxy(log,{
    apply(target,thisArg,args){ //thisArg - это контекст, если мы задаем его с помощью bind или call,args - массив аргументов
        console.log('Calling fn...');
        return target.apply(thisArg,args).toUpperCase();
    }
})
//Classes
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person,{
    construct(target,args){
        console.log("Construct...");

        return new Proxy(new target(...args),{
            get(t,prop){
                console.log(`Getting prop: ${prop}`)
                return t[prop];
            }
        })
    }

})

const p = new PersonProxy("Maxim",28);


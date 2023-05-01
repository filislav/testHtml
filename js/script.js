interval = setInterval(my_func,1000);

let counter = 0;
function my_func(){   
    counter++;
    console.log(`counter = ${counter}`);
    if(counter==10){
        clearInterval(interval);
    }
}

setTimeout(()=>{
    alert("Работа программы завершена");
},10000);

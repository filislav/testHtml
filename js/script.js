let form = document.getElementById('main-form');
let button = document.querySelector('.btn');


let alertClick = ()=>{
    alert("Событие состоялось!!!");
};
button.addEventListener('click',alertClick);

let checkForm = (event)=>{
    event.preventDefault();
    let name = form.name.value;
    let pass = form.pass.value;
    let repass = form.repass.value;
    let gender = form.state.value;

    let fail ="";

    if(name==""||pass==""||repass==""){
        fail = 'Заполните все поля!';
    }else if(pass!=repass){
        fail = 'Пароли не одинаковые';
    }
    if (fail!=""){
        document.getElementById('error').innerHTML = fail;
        console.log(`Имя: ${name}, Пароль: ${pass}, Подтв.пароля: ${repass},Пол: ${gender}`)

    }else{    
        window.location ='https://www.ya.ru';
    }
    return false;
};
form.addEventListener('submit',checkForm);
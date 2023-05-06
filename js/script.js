let form = document.getElementById('main-form');
let result = document.getElementById('result');
let isPolindrom = (event)=>{
    event.preventDefault();
    let input = form.polindrom.value;
    input = input.toLowerCase();
    result.innerHTML = `Результат : ${input===input.split("").reverse().join("")}`;   
    return false;
}


form.addEventListener('submit',isPolindrom);


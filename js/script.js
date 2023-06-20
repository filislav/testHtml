console.log("staring");
const delay = ms => {
    return new Promise(r => setTimeout(()=>r(),ms));
};

const url = 'https://jsonplaceholder.typicode.com/todos';

async function fetchAsyncTodos(){ 
    console.log('FetchTodo started');
    try{
        await delay(2000) // пока промис delay() не зарезолвится мы не перейдем к следующей строке кода. Это работа await
        const responce = await fetch(url);
        const data = await responce.json();
        console.log('Data:',data);
    }catch(e){
        console.error(e);
    }finally{
        console.log('finally...');
    }
}

fetchAsyncTodos(); //эта функция всегда возвращает нам промис последнего await и у нее так же можно вызвать метод then()
// function fetchTodos(){
//     console.log('FetchTodo started');
//    return delay(2000)
//    .then(()=>fetch(url)) // в ES6 если мы не пишем return то js автоматически возвращает нам результат
//    .then(responce=>responce.json()); 
// }

// fetchTodos().then(data => {
//     console.log('Data:',data);
// }).catch(e=>{console.error(e)});
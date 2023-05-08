console.log('Request data...');

// setTimeout(()=>{
//     console.log('Preparing data...');
//     const backendData = {
//         server:"aws",
//         port:22334,
//         status:"working"
//     };

//     setTimeout(()=>{
//         backendData.modified = true;
//         console.log('Data recieved:',backendData);
//     },2000);

// },2000);
// const p = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Preparing data...');
//         const backendData = {
//         server:"aws",
//         port:22334,
//         status:"working"
//         };
//         resolve(backendData);
//     },2000);
// });


// p.then((data)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             data.modified = true;
//             //console.log('Data recieved:',data);
//             resolve(data);
//         },2000);        
//     });    
// })
// .then((clientData)=>{
//     clientData.fromPromise = true;
//     return clientData;
// })
// .then((data)=>{
//     console.log("Data recieved:",data);
// })
// .catch((err=>{
//     console.log("Error:",err);
// }))
// .finally(()=>{
//     console.log('finally');
// })

const sleep = ms => {return new Promise(resolve=>{setTimeout(()=>resolve(),ms)})};

// timeout(2000).then(()=>{console.log('after 2 seconds')});
// timeout(3000).then(()=>{console.log('after 3 seconds')});

Promise.all([sleep(2000),sleep(3000)]).then(()=>{ //когда все промисы отработают
    console.log('All promises');
});

Promise.race([sleep(2000),sleep(3000)]).then(()=>{ //когда первый промис отработает
    console.log('Race promises');
});

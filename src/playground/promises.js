const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name:'julio',
        //     age:25
        // });
        reject('Something wnet wrong!');
    }, 5000);
    
});

console.log('before');
promise.then((data) => {
    console.log('1',data);
    return 'some data';
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('ERROR:',error);
});



console.log('before');
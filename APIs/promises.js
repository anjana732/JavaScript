const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("inside promise 1");
    },1000)
})
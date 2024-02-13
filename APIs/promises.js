const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("inside promise 1");
        resolve();
    },1000)
})


const consumePromise = promise1.then(()=>{
    console.log("inside consume promise 1");
})

//creation of promise 2 which includes parameter in resolve

const promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("inside promise 2");
        resolve({username:"Anjana",password:"123"})
    },1000)
})

//consuming promise 2

const promise2Consumption = promise2.then((response)=>{
    console.log(response);
})

//other way of promise consumption

const promise3 = new Promise((resolve,reject)=>{
    console.log("inside promise 3");
    resolve({username:"singh", password:"123"});
}).then((response)=>{
    console.log(response);
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("inside promise 4")
        let error = true;
        if(!error){
            resolve({username:"singh", password:"123"})
        }else{
            reject("something went wrong")
        }
    },1000)
}).then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
}).finally("either one of the above two has been executed")

//use of async and await

const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Inside promise 5");
        let error = false;
        if(!error){
            resolve({username:"Anjana singh", password:"123"})
        }else{
            reject("someting went wrong")
        }
    },1000)
})

async function learnPromise(){
    const data = await promise5
    console.log(data)
}

learnPromise()

/*fetch("https://api.github.com/users/anjana732").then((data)=>{
    console.log(JSON(data.followers))}).catch((error)=>{
        console.log(error)
    })*/

async function getData(){
    try {
        const response = await fetch("https://api.github.com/users/anjana732")
       // console.log(response)
        const data = await response.json()
       // console.log(data)
    } catch (error) {
        console.log(error);
    }
   
}

//getData()

//getting data using fetch

fetch("https://api.github.com/users/anjana732")
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
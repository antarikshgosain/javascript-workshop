//Consider the fetchData() to be part of some other library and you want to use it
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved!')
        }, 1000);
    });
    return promise;
}

//setTimeout() runs after a certain amount of time
setTimeout(() => {
    fetchData()                 //fetchData is called for 1st time
    .then(text => {
        console.log(text)       //fetchData text printed from 1st call
        return fetchData()      //fetchData is called for 2nd time
    })
    .then(text2 => {
        console.log(text2)      //fetchData text printed from 2nd call
    })
    console.log("Work Complete")
} , 2000); //2 seconds

console.log("Hello!")


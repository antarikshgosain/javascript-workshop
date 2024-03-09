
//String can be initialized using 3 ways
var name = "Antariksh";         //var is variable
const action = 'says';          //const is constanct (can't be changed) error upon any change to const
let message = `Hello World!`;   //let is variable that is changable


const getMessage = (name, action, message) => {
    return name+" "+action+' '+message ;
}

const addHandler = (a,b) => { 
    console.log("Arrow method will now add "+a+" and "+b);
    return a+b 
}

const nextNumberHandler = a => a+1;

console.log(getMessage(name, action, message));
console.log("Add Handler: "+addHandler(10,5));
console.log("Next Number: "+nextNumberHandler(20));
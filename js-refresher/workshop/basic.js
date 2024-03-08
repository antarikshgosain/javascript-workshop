
//String can be initialized using 3 ways
var name = "Antariksh";         //var is variable
const action = 'says';          //const is constanct (can't be changed) error upon any change to const
let message = `Hello World!`;   //let is variable that is changable


const getMessage = (name, action, message) => {
    return name+" "+action+' '+message ;
}

console.log(getMessage(name, action, message));
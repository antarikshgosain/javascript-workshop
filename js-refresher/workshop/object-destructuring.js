//Objects allow us to group data togther
const person ={
    name: 'Anta',
    age: 28,
    course: 'javascript'
}

console.log(person);

const printName = (personData) => {
    console.log("Person: " + personData.name + " Age: " + person.age)
}

printName(person)

const printNameOnly = ({name, age}) => {
    console.log("Name only: " + name + " Age: " + age )
}

printNameOnly(person)

var sunColors = ['red', 'orange', 'yellow']
var landColors = ['green', 'blue', 'brown']
var flowerColors = ['pink', 'purple', 'cyan']

const [firstSunColor, secondSunColor] = sunColors
console.log("First Sun Color:", firstSunColor ,secondSunColor)

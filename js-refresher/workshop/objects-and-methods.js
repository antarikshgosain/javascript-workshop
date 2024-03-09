//Objects allow us to group data togther
const person ={
    name: 'Anta',
    age: 28,
}

console.log(person);

//Objects allow us to group data togther
const person_2 ={
    name: 'Anta2',
    age: 28,
    greet() {
        console.log("Hi, I am " + this.name);
    }
}
person_2.greet();

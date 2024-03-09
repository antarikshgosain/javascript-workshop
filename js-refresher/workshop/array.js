const hobbies = ['Sports', 'Reading', 1234, true];

// for(let hobby of hobbies){
//     console.log(hobby);
// }
console.log(hobbies);

const newHobbies = hobbies.map((hobby) => "Hobby: " + hobby);

console.log(newHobbies);

const filteredHobbies = hobbies.filter((hobby) => typeof hobby === 'string');

console.log(filteredHobbies)


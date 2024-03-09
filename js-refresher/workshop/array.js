const hobbies = ['Sports', 'Reading', 1234, true];

for(let hobby of hobbies){
    console.log(hobby);
}

const newHobbies = hobbies.map((hobby) => "Hobby: " + hobby);


for(let hobby of newHobbies){
    console.log(hobby);
}

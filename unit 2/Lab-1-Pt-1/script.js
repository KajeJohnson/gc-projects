// var name = 'Jalen';

// name = 'Jason';

// var name = 'Henry';

// console.log(name);

// let myName = 'Sarah';

// myName = 'Linda';

// console.log(myName);

// const anotherName = 'Terry';

// // anotherName = 'Sam';


const me = {
    name: 'KJ',
    age: 30,
    height: '5 feet 3 inches',
    hasAdog: false,
    pets: ['Beemo', 'Crash'],
};

console.log(me);
console.log(typeof me);

me.age = 21;

console.log(me);

//dot notation
console.log(me.name);

//bracket notation

console.log(me['height']);

const age = 18;
let isDrinkingAge = null;

if (age >= 21) {
    isDrinkingAge = true;
} else {
    isDrinkingAge = false;
}

console.log(isDrinkingAge);
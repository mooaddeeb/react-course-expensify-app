// const person = {
//   // name: 'Eddie',
//   age: 34,
//   location: {
//     city: 'Richmond',
//     temp: 40,
//   },
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp: temperature = 70} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['2324 Edgeview', 'Richmond', 'Virgina', '23113'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);

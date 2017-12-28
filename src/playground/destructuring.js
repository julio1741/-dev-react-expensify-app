//Object destructuring

// const person = {
//     name: 'julio',
//     age: 30,
//     location:{
//         city:'Maracaibo',
//         temp:52
//     }
// };

// const {name: firstname = "Anonymous", age} = person;
// console.log(`${firstname} is ${age}`);

// const {city,temp: temperature} = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }


// ////////
// const book = {
//     title: "Ego is th enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// }

// const {name: publisherName = "Unknow"} = book.publisher

// console.log(publisherName)



//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state = 'New', zip] = address;
console.log(`You are in ${city} ${state}`)

//
const item = ['Coffee (hot)', '$2.00' , '$2.50', '$2.75']
const [product,,cost] = item;
console.log(`A medium ${product} costs ${cost}`)

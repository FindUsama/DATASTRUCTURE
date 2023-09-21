'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours= {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  
};




const properties=Object.keys(openingHours)
console.log(properties)
console.log(openingHours)

// const menue=[...restaurant.mainMenu,...restaurant.starterMenu]
// console.log(menue)


//               for of loop
// for (const item of menue) {
//   console.log(item)
  
// }


// spread operator (...)
// const arr=[1,2,3];
// let badArray=[arr[0],arr[2],4,5]
// console.log(badArray)
//  using spread operator (...)
// let newArr=[7,8,...arr]
// console.log(newArr);

// console.log(...newArr);


// rest operator ...a,...b;

// short circuting
// console.log(false||false) 
// console.log( 7 &&'jonas'&& false ) 

// const guest=undefined;

// console.log(guest??10)

// const rest1 ={
//   name:'sushi',
//   rooms:4,
// }

// const rest2 ={
//   name:'jakobi',
//   ownername:'yaho'
// }

// rest1.rooms=rest1.rooms || 10
// rest2.rooms=rest2.rooms || null

// console.log(rest1)
// console.log(rest2)

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1-

// const [player1,player2]=game.players
// console.log(player1,player2)

// const [gk,...restfield]=player1
// console.log(gk,restfield)

// const [gk2,...restfield2]=player2
// console.log(gk2,restfield2)

// const allplayers=[...player1,...player2]
// console.log(allplayers)






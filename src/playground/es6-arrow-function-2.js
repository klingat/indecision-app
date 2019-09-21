// const add = function(a, b) {
//   console.log(arguments); // arguments is no longer accessible inside arrow functions
//   return a + b;
// };
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(20, 50, 100, "abc"));
// const add = (num1, num2) => num1 + num2;

// DOES NOT WORK
// const user = {
//   name: "Andrew",
//   cities: ["Minnesota", "New York", "Dublin"],
//   printPlacesLived: function() {
//     this.cities.forEach(function(city) {
//       console.log(this.name + " has lived in " + city + ".");
//     });
//   }
// };

// DOES WORK
// All that was changed was changing the es5 function in the forEach to an arrow function
const user = {
  name: "Andrew",
  cities: ["Dubai", "New York", "Dublin"],
  printPlacesLived() {
    this.cities.map(city =>
      console.log(this.name + " has lived in " + city + ".")
    );
  }
};

user.printPlacesLived();

// CHALLENGE
const multiplier = {
  numbers: [2, 3, 4, 5],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

const square = function(x) {
  return x * x;
};

// const squareArrow = x => {
//   return x * x;
// };
const squareArrow = x => x * x;

console.log(square(8));
console.log(squareArrow(8));

// const getFirstName = name => {
//   return name.split(" ")[0];
// };
const getFirstName = fullName => fullName.split(" ")[0];

console.log(getFirstName("John Doe"));
console.log(getFirstName("Jane Doe"));

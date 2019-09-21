var nameVar = "Andrew";
var nameVar = "Mike"; // with var you can overwrite the previously declared variable.
// This can get you into trouble if you create a variable that already exists, and you overwrite it
// unknowingly.
console.log("nameVar: ", nameVar);

let nameLet = "Jack";
// let nameLet = "Julie"; // this is invalid. things will crash.
nameLet = "Julie"; // valid
// you can re-assign the value of nameLet, but you cannot redefine it.
console.log("nameLet: ", nameLet);

const nameConst = "Frank";
// const nameConst = "Gunther"; // invalid, same as let
// nameConst = "Jane" // invalid
// you cannot re-assign the value of nameLet, nor redefine it.
console.log("nameConst: ", nameConst);

// function one() {
//   console.log("This is function one");
// }

// // console.log(one);

// function two(oneCallback) {
//   console.log("This is function two");
// }

// one(two());

function funcOne() {
  console.log("notifyUser function was called!");
}
// you are literally calling the function you just declared/ made
funcOne();

// here you are asking the console to log the entire function of funcOne hence it logs the console.log part
console.log(funcOne);

// second function which has a parameter to it
function funcTwo(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  //   without this last bit, the console will not log funcOne when called in line 32
  notifyUserCallback();
}
// funcTwo();
console.log(funcTwo);

funcTwo(funcOne);

// function myAwesomeFunction(chips) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
//   chips();
// }

// myAwesomeFunction(function () {
//   console.log("notifyUser function was called!");
// });

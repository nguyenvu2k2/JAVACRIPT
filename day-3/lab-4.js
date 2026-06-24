console.log("day 03");

const scores = [10, 20, 30, 40, 50];

// scores.forEach((value, index) => {
//   console.log(index + ": " + value);
// });

// method map()

// const doubledScores = scores.map((value, index) => {
//   return value * 2;
// });

// console.log(doubledScores);

// method filter()

const filteredScores = scores.filter((value, index) => {
  return value > 20; // return true if value is greater than 20
});

console.log(filteredScores);

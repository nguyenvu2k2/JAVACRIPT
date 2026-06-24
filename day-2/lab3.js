console.log("Lab-3");
const names = ["Alice", "Bob", "Charlie", "David", "Frank", "Eve"];

names.push("Dat", "An");
names.unshift("Han");

// names.splice(2, 1); // Remove "Charlie"
// names.pop(); // Remove "Frank
// names.shift(); // Remove "Eve"

// console.log(names);

// for (let i = 0; i < names.length; i++) {
//   console.log(i + ": " + names[i]);
// }

console.log("--------------------");

names.forEach((name, index) => {
  console.log(index + ": " + name);
});

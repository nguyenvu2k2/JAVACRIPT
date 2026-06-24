console.log("day 05");

const sv1 = {
  name: "An",
  score: 10,
};

const sv2 = {
  name: "Vu",
  score: 6,
};

const sv3 = {
  name: "Han",
  score: 7,
};

const sinhvien = [sv1, sv2, sv3];
console.log(">>> sinhvien: ", sinhvien);

// sinhvien.forEach((value, index) => {
//   console.log(index + ": " + value.name + " - " + value.score);
// });

// for (let key in sinhvien) {
//   console.log(sinhvien[key]);
//   console.log(key + ": " + sinhvien[key].name);
// }

for (let value of Object.values(sinhvien)) {
  console.log(value);
}

console.log("day 04");

const scores = [10, 20, 30, 40, 50];

const svn = {
  score: 10,
  name: "sinh viên",
  address: {
    city: "HCM",
    country: "VN",
  },
};

const svn1 = {
  score: 10,
  name: "An",
  address: {
    city: "HCM",
    country: "VN",
  },
};

const sinhvien = [svn, svn1];
svn.birth = "2000-01-01";
svn["language"] = "VN";

console.log(">>> scores: ", svn);

delete svn.language;

console.log(">>> sinhvien: ", svn);

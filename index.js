const { division } = require("./division.js");
const { minus } = require("./minus.js");
const { mult } = require("./multiply.js");
const { plus } = require("./plus.js");

const nodePath = process.argv[0];
const appPath = process.argv[1];
const val1 = process.argv[2];
const val2 = process.argv[3];
const exp = process.argv[4];

console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();

if (exp === "div") {
  console.log(division(val1, val2));
} else if (exp === "min") {
  console.log(minus(val1, val2));
} else if (exp === "plus") {
  console.log(plus(val1, val2));
} else if (exp === "mult") {
  console.log(mult(val1, val2));
} else {
  console.log("Exit");
}

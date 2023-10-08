const { division } = require("./division.js");
const { minus } = require("./minus.js");
const { mult } = require("./multiply.js");
const { plus } = require("./plus.js");

const [, , val1, val2] = process.argv;

const expressions = {
  division,
  minus,
  mult,
  plus,
};

function strToNumber(str) {
  if (str === undefined) {
    return;
  }
  str = parseInt(str);
  return str;
}

Object.keys(expressions).forEach(function (key) {
  console.log(
    `${key}, входные значения ${val1} и ${val2} - результат ${expressions[key](
      strToNumber(val1),
      strToNumber(val2)
    )}`
  );
});

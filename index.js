const { division } = require("./division.js");
const { minus } = require("./minus.js");
const { mult } = require("./multiply.js");
const { plus } = require("./plus.js");

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

const expressions = {
  division,
  minus,
  mult,
  plus,
};
const [, , val1, val2] = process.argv;

function strToNumber(str) {
  if (str === undefined) {
    return;
  }
  str = parseInt(str);
  return str;
}

Object.keys(expressions).forEach(function (key) {
  myEmitter.on(key, (val1, val2) =>{
    console.log(
      `${key}, входные значения ${val1} и ${val2} - результат ${expressions[key](
        strToNumber(val1),
        strToNumber(val2)
      )}`)
});
myEmitter.emit(key, val1, val2);
});


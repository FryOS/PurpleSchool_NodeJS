const { division } = require("./division.js");
const { minus } = require("./minus.js");
const { mult } = require("./multiply.js");
const { plus } = require("./plus.js");

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("plus", (val1, val2) =>{
    console.log(plus(val1, val2));
});
myEmitter.emit("plus", 25, 5);

myEmitter.on("minus", (val1, val2) =>{
    console.log(minus(val1, val2));
});
myEmitter.emit("minus", 25, 5);

myEmitter.on("mult", (val1, val2) =>{
    console.log(mult(val1, val2));
});
myEmitter.emit("mult", 25, 5);

myEmitter.on("div", (val1, val2) =>{
    console.log(division(val1, val2));
});
myEmitter.emit("div", 25, 5);


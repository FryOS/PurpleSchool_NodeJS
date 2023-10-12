const filledArray = require("./filledArr.js");

function main() {
  performance.mark("start");

  filledArray(3000000);

  performance.mark("end");
  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main"));
}

main();

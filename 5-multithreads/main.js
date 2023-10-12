const { compute } = require("./app-worker.js");

// const chunk = (array, size) => {
//   const chunks = [];
//   while (array.length) {
//     chunks.push(array.splice(0, size));
//   }
//   return chunks;
// };
module.exports = async function main(bigNumber) {
  try {
    performance.mark("start");
    await Promise.all([compute(bigNumber)]);
  } catch (error) {
    console.error(error.message);
  }
  
  performance.mark("end");
  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main"));
};

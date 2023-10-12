const { compute } = require("./app-worker");

// const chunk = (array, size) => {
//   const chunks = [];
//   while (array.length) {
//     chunks.push(array.splice(0, size));
//   }
//   return chunks;
// };
const main = async (bigNumber) => {
  try {
    performance.mark("start");
    await Promise.all([compute(bigNumber)]);
  } catch (error) {
    console.error(error.message);
  }
  console.log(result);

  performance.mark("end");
  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main"));
};
exports.main = main;

const { parentPort, workerData } = require("worker_threads");
const filledArray = require("./filledArr.js");

const chunk = (array, size) => {
  const chunks = [];
  while (array.length) {
    chunks.push(array.splice(0, size));
  }
  return chunks;
};

process.env.UV_THREADPOOL_SIZE = 8;

function main(bigNumber) {
  performance.mark("start");
  const newArr = chunk(filledArray(bigNumber), process.env.UV_THREADPOOL_SIZE);

  for (let j = 0; j < newArr.length; j++) {
    const element = newArr[j];
    for (let k = 0; k < element.length; k++) {
      if (element[k] % 3 === 0) {
        count++;
      }
    }
  }
  performance.mark("end");
  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main"));
}

//main();

parentPort.postMessage(main(workerData));

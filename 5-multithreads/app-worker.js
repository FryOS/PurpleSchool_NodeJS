const { Worker } = require("worker_threads");
const { main } = require("./main.js");

const compute = (num) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", {
      workerData: {
        num,
      },
    });
    worker.on("message", (message) => {
      resolve(message);
    });

    worker.on("error", (message) => {
      reject(message);
    });

    worker.on("exit", () => {
      console.log("Завершение");
    });
  });
};


main(3000000);
exports.compute = compute;

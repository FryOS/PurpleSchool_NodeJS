const { Worker } = require("worker_threads");
const { main } = require("./main");

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
exports.compute = compute;

main(3000000);

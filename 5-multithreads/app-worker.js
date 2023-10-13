const { Worker } = require("worker_threads");

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

async function main(bigNumber) {
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

main(3000000);

const { Worker } = require("worker_threads");
const sliceArr = require("./slicearr");

const threads = process.env.UV_THREADPOOL_SIZE = 8;

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

async function main(array) {
  
  const arrOfarrays = sliceArr(array, threads);

  try {
    performance.mark("start");
    await arrOfarrays.map(x => Promise.all([compute(x)]));     
  } catch (error) {
    console.error(error.message);
  }
  
  performance.mark("end");
  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main"));
};

const arrayArrays = [];
for (let i = 0; i <= 3_000_000; i++) { 
  
  if(arrayArrays[i] % 3 === 0) {
    arrayArrays.push(i);
  }    
}

main(arrayArrays);

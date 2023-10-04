const start = performance.now();
function mySetTimeout(timeout) {
    setTimeout(() => {
        console.log(performance.now() - start);
        console.log(`таймер закончится через ${timeout}`);
       
    }, timeout)
}


function timeToSeconds(hour, minute, second) {
   let timeSeconds =  +hour*60*60 + +minute*60 + +second;
   return timeSeconds;
}

let nodePath = process.argv[0];
let appPath = process.argv[1];
let hour = process.argv[2];
let minute = process.argv[3];
let second = process.argv[4];
 
console.log(mySetTimeout( timeToSeconds(hour, minute, second))); 



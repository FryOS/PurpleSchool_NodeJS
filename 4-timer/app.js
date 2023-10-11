const start = performance.now();
function mySetTimeout(timeout) {
  console.log(`таймер закончится через ${timeout/1000} секунд`);
  setTimeout(() => {
    console.log(performance.now() - start);
  }, timeout);
}

function timeToSeconds(hour, minute, second) {
  let timeSeconds =
    (strToNumber(hour) * 60 * 60 +
      strToNumber(minute) * 60 +
      strToNumber(second)) *
    1000;
  return timeSeconds;
}

const [nodePath, appPath, hour, minute, second] = process.argv;

mySetTimeout(timeToSeconds(hour, minute, second));

function strToNumber(str) {
  if (str === undefined) {
    return;
  }
  str = parseInt(str);
  return str;
}

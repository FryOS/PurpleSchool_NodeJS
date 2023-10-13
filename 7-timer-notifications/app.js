const notifier = require("node-notifier");
// String
//notifier.notify('Message');

// Object
// notifier.notify({
//   title: 'My notification',
//   message: 'Hello, there!'
// });

const start = performance.now();
function mySetTimeout(timeout) {
  notifier.notify({
    message:`таймер закончится через ${timeout / 1000} секунд`,
    sound: true,
  },
  function (error, response, metadata) {
    console.log(response, metadata);
  });
  setTimeout(() => {
    console.log(performance.now() - start);
    notifier.notify("Время вышло");
    notifier.on("click", function (notifierObject, options, event) {
      console.log("Thanks");
    });
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

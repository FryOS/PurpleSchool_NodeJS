
const getArgs = (args) => {
  const res = {};
  const [executor, file, ...restartArgs] = args;
  restartArgs.forEach((value, index, array) => {
    console.log(array);
    if (value.charAt(0) === "-") {
      if (index == array.length - 1) {
        res[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) !== "-") {
        const arrValue = [];
        for (let j = index + 1; j < array.length; j++) {
          if(array[index + 1].charAt(0) === "-"){
            break;
          }
          arrValue.push(array[j]);          
        }
        res[value.substring(1)] = arrValue;
      } else {
        res[value.substring(1)] = true;
      }
    }
  });
  return res;
};

export { getArgs };

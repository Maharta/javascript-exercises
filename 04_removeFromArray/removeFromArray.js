const removeFromArray = function (arr, ...args) {
  args.forEach((arg) => {
    for (let i = 0; i < arr.length; i++) {
      if (arg === arr[i]) {
        arr.splice(i, 1);
        i--;
      }
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

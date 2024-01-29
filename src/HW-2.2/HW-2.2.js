function commonPrefix(arr) {
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i >= arr[j].length) {
        return arr[j];
      }
      if (arr[0][i] != arr[j][i]) {
        return arr[0].substr(0, i);
      }
    }
  }
  return arr[0];
}

strs1 = ["flower", "flow", "flight"];
strs2 = ["dog", "racecar", "car"];

console.log(commonPrefix(strs1));
console.log(commonPrefix(strs2));

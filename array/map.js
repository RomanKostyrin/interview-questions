const arr = [1, 5, 4, 3, 2];

Array.prototype.myMap = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

console.log(arr.map((el, i) => el * i));
console.log(arr.myMap((el, i) => el * i));

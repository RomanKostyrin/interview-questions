const arr = [1, 5, 4, 3, 2];

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

console.log(arr.forEach((el, i, array) => console.log(el, i, array)));
console.log(arr.myForEach((el, i, array) => console.log(el, i, array)));

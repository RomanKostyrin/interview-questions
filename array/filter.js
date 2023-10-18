const arr = [1, 2, 3, 4, 5, 6, 7];
const fake = [undefined];

Array.prototype.myFilter = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

console.log(arr.filter((el, i) => el % i === 0));
console.log(arr.myFilter((el, i) => el % i === 0));
console.log(fake.filter((el) => el % 2 === 0));
console.log(fake.myFilter((el) => el % 2 === 0));

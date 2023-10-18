const arr = [1, 5, 4, 3, 2];

Array.prototype.myReduce = function (callback, accum) {
  let response = accum || this[0];
  for (let i = accum ? 0 : 1; i < this.length; i++) {
    response = callback(response, this[i], i, this);
  }
  return response;
};
const callb = (acc, el, i) => {
  acc.push(el + i);
  return acc;
};

console.log(arr.reduce((acc, el) => acc + el));
console.log(arr.myReduce((acc, el) => acc + el));

console.log(arr.reduce(callb, []));
console.log(arr.myReduce(callb, []));

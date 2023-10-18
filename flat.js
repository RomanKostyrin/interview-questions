const arr = [[1, [2], 3, [[4, [[5, 7, [1], 4]]]]]];

const flat = (data, depth = 1) => {
  if (!Array.isArray(data)) return data;
  const arr = [];
  data.forEach((el) => {
    if (depth && Array.isArray(el)) {
      arr.push(...flat(el, depth - 1));
    } else {
      arr.push(el);
    }
  });
  return arr;
};
console.log(flat(arr, 3));
console.log(arr.flat(3));

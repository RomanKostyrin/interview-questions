const obj = {
  name: 'object name',
  getName: function (data = '') {
    return this.name + data;
  },
};

const obj2 = {
  name: 'second object name',
};

Function.prototype.myBind = function (object, ...args) {
  object.fn = this;
  return (...args2) => object.fn(...args, ...args2);
};

console.log(obj.getName());
console.log(obj.getName.bind(obj2)(' from original bind'));

console.log(obj.getName.myBind(obj2)(' from custom bind'));

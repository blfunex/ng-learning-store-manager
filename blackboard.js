const object = {
  name: 'John',
  age: 30,
};

const entries = Object.entries(object);
// [ ['name', 'John'], ['age', 30] ]

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
// [2, 4, 6, 8, 10]
const odd = numbers.filter((n) => n % 2 === 1);
// [1, 3, 5]
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

const reduce = (arr, reducer, initial) => {
  let acc = initial;
  for (const item of arr) {
    acc = reducer(acc, item);
  }
  return acc;
};

const filter = (arr, test) =>
  reduce(
    arr,
    (out, item) => {
      if (test(item)) out.push(item);
      return out;
    },
    []
  );

const map = (arr, transform) =>
  reduce(
    arr,
    (out, item) => {
      out.push(transform(item));
      return out;
    },
    []
  );

const every = (arr, test) =>
  reduce(
    arr,
    (out, item) => {
      return out && test(item);
    },
    true
  );

const everyFast = (arr, test) => {
  for (const item of arr) {
    if (!test(item)) return false;
  }
  return true;
};

const some = (arr, test) =>
  reduce(
    arr,
    (out, item) => {
      return out || test(item);
    },
    false
  );

const someFast = (arr, test) => {
  for (const item of arr) {
    if (test(item)) return true;
  }
  return false;
};

const findIndex = (arr, item, start = 0) => {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
};

const findLastIndex = (arr, item, start = arr.length - 1) => {
  for (let i = start; i >= 0; i--) {
    if (arr[i] === item) return i;
  }
  return -1;
};

const find = (arr, test) => {
  for (const item of arr) {
    if (test(item)) return item;
  }
  return undefined;
};

const findLast = (arr, test) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (test(arr[i])) return arr[i];
  }
  return undefined;
};

const includes = (arr, item) => {
  for (const i of arr) {
    if (i === item) return true;
  }
  return false;
};

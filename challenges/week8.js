const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let i = nums.indexOf(n)
  return nums.includes(n) && nums[++i] || null;

};


const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let obj = {
    1: 0,
    0: 0
  }
  str.split('').filter((num) => num === "0" ? obj[0]++ : obj[1]++)
  return obj
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return Number(n.toString().split('').reverse().join(''))

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let myNewArr = [].concat(...arrs);
  return myNewArr.reduce((acc, value) => acc + value)
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2 || arr === []) {
    return arr
  }
  let first = arr.shift()
  let last = arr.pop()
  let midle = arr.slice(1 - 1)
  return [last, midle, first].reduce((acc, val) => acc.concat(val), [])

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return Object.values(haystack).toString().toUpperCase().includes(searchTerm.toUpperCase())
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let newStr = str.replace(/[^\w\s]/gi, '').toLowerCase().split(' ')
  const obj = {};
  newStr.forEach(n => {
  obj[n] = obj[n] ? obj[n] + 1 : 1;
  });
  return obj

};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let newArr = []
  nums.map((num) => newArr.push(Math.pow(num, 2)))
  return newArr;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let arr = words.slice(1)
  let result = []
  arr.map((w) => result.push(w.charAt(0).toUpperCase() + w.slice(1)))

  return words.length > 1 ? `${words[0]}${result.join('')}` : words.toString()
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let result = 0
  people.forEach((sub) => result += sub.subjects.length)
  return result
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  const result = menu.map((arr) => Object.values(arr.ingredients)).some((i) => i.includes(ingredient))
  return result
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const duplNumb = arr1.filter((num) => arr2.includes(num)).filter((num, index, arr) => arr.indexOf(num) === index).sort();
  return duplNumb;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

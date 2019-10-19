function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((n) => n < 1 )

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((n) => n[0] === char)

}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((w) => w.includes('to ') )

}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((n)=> n === parseInt(n))
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((c)=> c.data.city.displayName)
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let rtNums = []
  nums.forEach((n)=> rtNums.push(Number(Math.sqrt(n).toFixed(2))))
  return rtNums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((s) => s.toLowerCase().includes(str.toLowerCase()))
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let arr = []
  triangles.forEach((n)=> arr.push(Math.max(...n)))
  return arr
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

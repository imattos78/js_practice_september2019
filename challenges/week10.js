const Sugar = require("sugar")
Sugar.extend()
/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if  (!Number(n)) throw new Error("number is required");
  let arr = n.toString().split('')
     return arr.map((n)=> Number(n)).reduce((acc, curr)=> acc + curr)
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined || step < 0){
    step = 1;
  }
  if(start > end){
    start = [end, end = start][0]; //value exchange between variables
  }
  let arr = []
  for(let i = start; i <= end; i += step){
    arr.push(i)
    
  }
  if(arr[arr.length-1] < end){
    arr.push(end)
  }
  
  return arr
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if(!Array.isArray(users)) throw new Error("Incorrect type of data");
  if (typeof date !== "string") throw new Error("In")
  
  let result = []

  users.map((obj)=> obj.screenTime.filter((d)=> d.date === date).map((u)=>Object.values(u.usage).reduce((a,b)=>a+b))> 100 && result.push(obj.username))

 return result
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error
  ("hexStr is required");
  if (hexStr[0] !== "#") throw new Error ("The string must start with #");
  let obj = {
    "0":0,
    "A":10,
    "B":11,
    "C":12,
    "D":13,
    "E":14,
    "F":15
  }
  
let newArr = hexStr.toUpperCase().slice(1).split('');

let arr = []

newArr.forEach((w)=>Number(w) ? arr.push(Number(w)) : Object.keys(obj).filter((c) => w === c && arr.push(obj[c])))


let twoDimArr = arr.map((e,i) => (i % 2 === 0) && arr.slice(i, i + 2)).filter((e) => e)



let r = twoDimArr[0] === undefined || twoDimArr[0].length < 2 ? "Incorrect" : twoDimArr[0].reduce((a,b)=> (a * 16) + b);
let g = twoDimArr[1] === undefined || twoDimArr[1].length < 2 ? "Incorrect" : twoDimArr[1].reduce((a,b)=> (a * 16) + b);
let b = twoDimArr[2] === undefined || twoDimArr[2].length < 2 ? "Incorrect" : twoDimArr[2].reduce((a,b)=> (a * 16) + b);

return r === "Incorrect"|| g === "Incorrect" || b === "Incorrect" ? "This error is becouse you entered an incorrect character or the number of characters are incorrect, only 'A','B','C','D','E','F' are alowed" : "rgb(" + `${r},${g},${b}` + ")"
 
};


/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  let arr = [].concat(...board);
  let result = ''
  if(arr[0] === arr[1] && arr[0] === arr[2]) result = arr[0];
    else if(arr[3] === arr[4] && arr[3] === arr[5]) result = arr[3];
    else if(arr[6] === arr[7] && arr[6] === arr[8]) result = arr[6]; 
    else if(arr[0] === arr[3] && arr[0] === arr[6]) result = arr[0];
    else if(arr[1] === arr[4] && arr[1] === arr[7]) result = arr[1];
    else if(arr[2] === arr[5] && arr[2] === arr[8]) result = arr[2];
    else if(arr[0] === arr[4] && arr[0] === arr[8]) result = arr[0];
    else result = null;   
   
  return result;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};

const Sugar = require("sugar")
Sugar.extend()

function capitalize(word) {
    if (word === undefined) throw new Error("word is required");
    // Add your code here!
    //return `${word[0].toUpperCase()}${word.slice(1)}`;
    return word.capitalize() //Only capitalizes the first character of the first word of the string
  }
  
  function generateInitials(firstName, lastName) {
    if (firstName === undefined) throw new Error("firstName is required");
    if (lastName === undefined) throw new Error("lastName is required");
    // Add your code here!
    return `${firstName.first()}.${lastName.first()}`; //Return the first characters of the string
  }
  
  function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined) throw new Error("originalPrice is requied");
    if (vatRate === undefined) throw new Error("vatRate is required");
    // Add your code here!
    let result = originalPrice + (vatRate / 100 * originalPrice);
    return result.toNumber().round(2) //Return the result into Number with 2 decimals alowed
  }
  
  function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined) throw new Error("originalPrice is required");
    if (reduction === undefined) throw new Error("reduction is required");
    // Add your code here!
    let result = originalPrice - (reduction / 100 * originalPrice);
    return result.toNumber().round(2) //Return the result into Number with 2 decimals alowed
  }
  
  //FINAL SOLUTION 
  function getMiddleCharacter(str) {
    if (str === undefined) throw new Error("str is required");
    // Add your code here!
    let mean = str.length / 2
    return str.length % 2 === 0 ? `${str.at(mean - 1)}${str.at(mean)}` : str.at(mean) //I've remplaced charAt() by at()
  }
  
  //FIRST SOLUTION 
  // function getMiddleCharacter(str) {
  //   if (str === undefined) throw new Error("str is required");
  //   // Add your code here!
  //   let odd = Math.floor(str.length / 2)
  //   let even = (str.length / 2) - 1
  //   return str.length % 2 === 0 ? str.slice(even, (even + 2)) : str.slice(odd, -odd)
  // }
  
  function reverseWord(word) {
    if (word === undefined) throw new Error("word is required");
    // Add your code here!
    return word.reverse() //I used reverse() a string Method of Sugar.js 
  }
  
  function reverseAllWords(words) {
    if (words === undefined) throw new Error("words is required");
    // Add your code here!
    return words.map((word) => word.reverse()) //I used reverse() a string Method of Sugar.js
  
  
  }
  
  function countLinuxUsers(users) {
    if (users === undefined) throw new Error("users is required");
    // Add your code here!
    let count = 0;
    users.forEach((user)=>user.type === "Linux" ? count ++ : 0); //Same forEach for arrays in Sugar.js
    return count;
  }
  
  function getMeanScore(scores) {
    if (scores === undefined) throw new Error("scores is required");
    // Add your code here!
    let count = 0;
    scores.forEach((score) => count += score)
    let avarage = count / scores.length
    return avarage.isInteger() ? avarage : avarage.round(2) //Changed isInteger() instead of Number.isInteger() also round() instead Number(avarage.toFixed(2))
  }
  
  function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error("n is required");
    // Add your code here!
    return n % 3 === 0 && n % 5 === 0 ? "fizzbuzz" : n % 3 === 0 ? 'fizz' : n % 5 === 0 ? 'buzz' : n
  }
  
  module.exports = {
    capitalize,
    generateInitials,
    addVAT,
    getSalePrice,
    getMiddleCharacter,
    reverseWord,
    reverseAllWords,
    countLinuxUsers,
    getMeanScore,
    simpleFizzBuzz
  };
  
const Sugar = require("sugar")
Sugar.extend()

function getFillings(sandwich) {
    if (sandwich === undefined) throw new Error("ingredients is required");
    // Your code here!
    return Object.get(sandwich, "fillings");
  }
  
  function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");
    // Your code here!
    return person.city === 'Manchester' ? true : false
 }
  
  function getBusNumbers(people) {
    if (people === undefined) throw new Error("people is required");
    let buses = 0;
    Array.construct(people,(i) => {
      return i % 40 === 0 ? buses++ : "No buses"
    }); 
    return buses  
  }
  
  function countSheep(arr) {
    if (arr === undefined) throw new Error("arr is required");
    // Your code here!
    let count = 0;
    arr.forEach((val)=> val === "sheep" ? count++ : "No sheeps in the array :(");
    return count;
  }
  
  function hasMPostCode(person) {
    if (person === undefined) throw new Error("person is required");
    // Your code here!
    let values = Object.values(person.address)
    return values[2].charAt(0) === "M" && values[1] === "Manchester" ? true : false
    
  }
  
  module.exports = {
    getFillings,
    isFromManchester,
    countSheep,
    getBusNumbers,
    hasMPostCode
  };
  
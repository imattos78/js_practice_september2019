const{sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
      areWeCovered,
      createMatrix

} = require("../challenges/week9");


describe("sumMultiples", () =>{
    test("it throws an error if not passed an array", () => {
        expect(()=>{
            sumMultiples();
        }).toThrow("arr is required");

        expect(()=>{
            sumMultiples('foo');
        }).toThrow("an Array is required");

        expect(()=>{
            sumMultiples(4);
        }).toThrow("an Array is required");
         
     });
    test("it return the sum of any numbers that are a multiple of 3 or 5", () => {
       const result = sumMultiples([1, 3, 5]);
       const expected = 8;
       expect(result).toBe(expected); 
    });
    test("it works okay with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected); 
     });
     test("return 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
         
     });
     test("it return only the sum of positive numbers multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, -10, 5, 13, 6, -3])).toBe(11);
         
     });
     test("return 0 if all numbers are negative only", () => {
        expect(sumMultiples([-1, -2, -8, -13, -7])).toBe(0);
         
     });

});

describe("isValidDNA", () =>{
    
    test("return true if the string contain C,G,T or A only", () => {
        expect(isValidDNA("TAG")).toBe(true)
    });
    test("return false if the string does't match with C,G,T or A only", () => {
        expect(isValidDNA("TAGSR")).toBe(false);
        expect(isValidDNA("RODRIJO")).toBe(false);
    });
    test("return true if the srting match witn C,G,T or A only || lowercase  ", () => {
        expect(isValidDNA("cgta")).toBe(true);
        expect(isValidDNA("CgTa")).toBe(true)
    });
    
});

describe("getComplementaryDNA", () =>{
    
    test("return the correct complementary DNA string, 'T' always pairs with 'A', and 'C' always pairs with 'G'", () =>{
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("CAGT")).toBe("GTCA");
    });
    test("return null if the string doesn't match with C,G,T or A only", () =>{
        expect(getComplementaryDNA("ACTGSR")).toBe(null);
        expect(getComplementaryDNA("45%£@!")).toBe(null);  
        
    });
    test("The string should not be case sensitive", () =>{
        expect(getComplementaryDNA("ACTGtac")).toBe("TGACATG");
        expect(getComplementaryDNA("ctaga")).toBe("GATCT");
        
    });
    
    
});

describe("isItPrime", () => {
    test("return true if the number is divided by 1 and itself only", () =>{
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(7)).toBe(true);

    });
    test("return false if the number is divided not only by 1 and itself", () =>{
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(6)).toBe(false);
        expect(isItPrime(8)).toBe(false);
        expect(isItPrime(12)).toBe(false);

    });
    
  });

describe.only("createMatrix", () => {
  it("returns a matrix of 1 * 1 when passed 1", () =>{
    const result = createMatrix(1, "foo");
    const expected = [["foo"]];
    expect(result).toEqual(expected);
  });
  it("returns a matrix of 3 * 3 when passed 3", () =>{
    const result = createMatrix(3, "foo");
    const expected = [
        ["foo", "foo", "foo"],
        ["foo", "foo", "foo"],
        ["foo", "foo", "foo"]
         ];
    expect(result).toEqual(expected);
  });
  it("returns an empty array if n <= 0", () =>{
    const result = createMatrix(-1, "foo");
    const expected = [];
    expect(result).toEqual(expected);
  });
});

describe("areWeCovered", () =>{
 test("it returns false if there are no staff at all", () =>{
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
 });
 test("returns false if there are staff but < 3 not scheduled to work", () =>{
     const staff = [
        {name: "gary", rota: ["Monday", "Tuesday"]},
        {name: "paul", rota: ["Monday", "Tuesday"]},
        {name: "sally", rota: ["Monday", "Tuesday"]},
        {name: "jess", rota: ["Monday", "Tuesday"]},
     ];
     expect(areWeCovered(staff, "Wednesday")).toBe(false);
 })
});
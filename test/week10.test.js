const{
    sumDigits,
    createRange

} = require("../challenges/week10");

describe("sumDigits", () =>{
    test("n is not a number", () =>{
        expect(() => {
            sumDigits("Hola");
        }).toThrow(Error);
        expect(() => {
            sumDigits([1,2,3]);
        }).toThrow(Error);
        expect(() => {
            sumDigits();
        }).toThrow(Error);
    })
    test("given a number it returns the sum of all its digits", ()=>{
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(2891)).toBe(20);   
    })

});

describe.only("createRange", () =>{
    test("given a start, an end and step numbers create a range of numbers as an array", ()=>{
        expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);
    })
    test("Both the start and the end numbers are inclusive.", ()=>{
        expect(createRange(7,18,2)).toEqual([7, 9, 11, 13,15,17,18]);
    })
    test("Step is an optional parameter. If it is not provided, assume the step is 1.", ()=>{
        expect(createRange(7,10)).toEqual([7, 8, 9, 10]);
    })
    test("Step is a negative number, assume the step is 1.", ()=>{
        expect(createRange(7,10,-8)).toEqual([7, 8, 9, 10]);
    })
    test("If start number is greater than end number, the values ​​will be swapped.Start takes the number of End and vice versa.", ()=>{
        expect(createRange(30,10,5)).toEqual([10, 15, 20, 25, 30]);
    })

});
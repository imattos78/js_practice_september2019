const{
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB

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

describe("createRange", () =>{
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

describe("getScreentimeAlertList", () =>{
    test("given an array of user objects we need to return an array of usernames who have used more than 100 minutes of screentime for a given date ", () =>{
        const users = [
            {
              username: "beth_1234",
              name: "Beth Smith",
              screenTime: [
                           { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                           { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                           { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                           { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                          ]
             },
             {
              username: "sam_j_1989",
              name: "Sam Jones",
              screenTime: [
                           { date: "2019-06-04", usage: { mapMyRun: 40, whatsApp: 61, facebook: 0, safari: 10} },
                           { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                           { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                          ]
             },
             {
              username: "sam_t_2000",
              name: "Sam Jones",
              screenTime: [
                           { date: "2019-05-04", usage: { mapMyRun: 40, whatsApp: 61, facebook: 0, safari: 10} },
                           { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                           { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                          ]
             },
           ]
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234","sam_t_2000"]);
    })
});
describe.only("hexToRGB", () =>{
    test("Given a string in hexadecimal format, this function must calculate and transform into a string in RGB format", () =>{
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
        expect(hexToRGB("#00FF00")).toBe("rgb(0,255,0)");
    })
    test("The function must not be case sensitive", () =>{
        expect(hexToRGB("#0000Ff")).toBe("rgb(0,0,255)");
    })
    test("If the hexadecimal letters are diferents to 'A,B,C,D,E,F' SHOW THE ERROR MESSAGE", ()=>{
        expect(hexToRGB("#AU00FR")).toBe("This error is becouse you entered an incorrect character or the number of characters are incorrect, only 'A','B','C','D','E','F' are alowed")
    })
    test("If the numbers of characters are less than seven SHOW THE ERROR MESSAGE", ()=>{
        expect(hexToRGB("#04FF0")).toBe("This error is becouse you entered an incorrect character or the number of characters are incorrect, only 'A','B','C','D','E','F' are alowed")
    })
})
   

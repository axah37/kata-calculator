import { expect } from "chai";
import { Calculator } from "../src/calculator"

describe("calculator tests", () => {
    it("should return 0", () => {
        expect(Calculator.add("")).to.be.eq(0);
    });

    it("should return same", () => {
        expect(Calculator.add("5")).to.be.eq(5);
    });

    it("should return sum", () => {
       expect(Calculator.add("5,5")).to.be.eq(10); 
    });

    it("should return sum with new lines removed", () => {
        expect(Calculator.add("1,\n2,3")).to.be.eq(6)
    });

    it("should support different deliminter", () => {
        expect(Calculator.add("//;\n1;2;3")).to.be.eq(6);   
    });

    it("should throw exceptions when negative number", () => {
        expect(function() {Calculator.add("1,2,-3")}).to.throw(TypeError, "negatives not allowed: -3");
    });

    it("should ignore numbers greater than 1000", () => {
        expect(Calculator.add("1000,2")).to.be.eq(2);
    });
});
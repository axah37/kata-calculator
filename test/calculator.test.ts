import { expect } from "chai";
import { Calculator } from "../src/calculator"

describe("calculator tests", () => {
    it("should return 0", () => {
        expect(0).to.be.eq(Calculator.add(""));
    });

    it("should return same number", () => {
        expect(5).to.be.eq(Calculator.add("5"));
    });

    it("should return sum", () => {
        expect(10).to.be.eq(Calculator.add("5", "5"));
    });
});

export{}
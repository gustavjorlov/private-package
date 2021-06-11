const { expect } = require("chai");
const { do_it } = require("../index");

describe("The test...", () => {
  it("should be correct", () => {
    expect(do_it("go for a bike ride!")).to.eql("GO FOR A BIKE RIDE!");
  });
});

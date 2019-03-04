const helpers = require("./project-1");

const {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
} = require("./project-1");

// start testing!

describe("helpers.js", () => {
  it("multiply by 10", () => {
    expect(multiplyByTen(2)).toEqual(20);
  });
  it("subtract by 5", () => {
    expect(subtractFive(10)).toEqual(5);
  });
  it("strings same length", () => {
    expect(areSameLength("bean", "rice")).toEqual(true);
    expect(areSameLength("cake", "ice")).toEqual(false);
  });
  it("numbers are equal", () => {
    expect(areEqual(10, 5 + 5)).toEqual(true);
  });
  it("checks if number is less than 90", () => {
    expect(lessThanNinety(89)).toEqual(true);
    expect(lessThanNinety(91)).toEqual(false);
  });
  it("checks if number is greater than 50", () => {
    expect(greaterThanFifty(51)).toEqual(true);
    expect(greaterThanFifty(49)).toEqual(false);
  });
  it("adds numbers", () => {
    expect(add(5, 2)).toEqual(7);
    expect(add(1, 1)).toEqual(2);
  });
  it("subtracts numbers", () => {
    expect(subtract(5, 2)).toEqual(3);
    expect(subtract(1, 1)).toEqual(0);
  });
  it("divides numbers", () => {
    expect(divide(6, 2)).toEqual(3);
    expect(divide(1, 1)).toEqual(1);
  });
  it("multiplies numbers", () => {
    expect(multiply(6, 2)).toEqual(12);
    expect(multiply(1, 1)).toEqual(1);
  });
  it("get remainder", () => {
    expect(getRemainder(5, 2)).toEqual(1);
    expect(getRemainder(10, 8)).toEqual(2);
  });
  it("checks if number is even", () => {
    expect(isEven(2)).toEqual(true);
    expect(isEven(1)).toEqual(false);
  });
  it("checks if number is odd", () => {
    expect(isOdd(1)).toEqual(true);
    expect(isOdd(2)).toEqual(false);
  });
  it("squares number", () => {
    expect(square(2)).toEqual(4);
    expect(square(1)).toEqual(1);
  });
  it("cubes number", () => {
    expect(cube(2)).toEqual(8);
    expect(cube(1)).toEqual(1);
  });
  it("number to its exponent", () => {
    expect(raiseToPower(2, 5)).toEqual(32);
    expect(raiseToPower(4, 3)).toEqual(64);
  });
  it("rounds number", () => {
    expect(roundNumber(15.5)).toEqual(16);
    expect(roundNumber(15.4)).toEqual(15);
  });
  it("rounds the number up", () => {
    expect(roundUp(15.4)).toEqual(16);
    expect(roundUp(0.1)).toEqual(1);
  });
  it("adds exclamation point", () => {
    expect(addExclamationPoint("Nice")).toEqual("Nice!");
  });
  it("combines names", () => {
    expect(combineNames("Kanek", "Perez")).toEqual("Kanek Perez");
  });
  it("greets name", () => {
    expect(getGreeting("Kanek")).toEqual("Hello Kanek!");
  });
  it("gets area of rectangle, given length times width", () => {
    expect(getRectangleArea(2, 4)).toEqual(8);
  });
  it("gets area of triangle, given base times height", () => {
    expect(getTriangleArea(2, 4)).toEqual(4);
  });
  it("gets area of circle, given radius", () => {
    expect(getCircleArea(2)).toEqual(12.566370614359172);
  });
  it("gets volume of rectangular prism, given length, width and height", () => {
    expect(getRectangularPrismVolume(2, 3, 4)).toEqual(24);
  });
});

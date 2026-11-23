import * as percentage from "../src/percentage.js";

console.log(percentage.calculatePercentage(5, 25));
// console.log(percentage.calculatePercentage(-5, 67)); Throwing error as intendid
console.log(percentage.calculatePercentage(5, 0)); // Handled zero exception

console.log(percentage.increaseByPercentage(50, 35));
console.log(percentage.increaseByPercentage(56, 0)); // edgecase of increasing value by zero
console.log(percentage.increaseByPercentage(0, 56)); // edgecase of increasing zero by some percentage

console.log(percentage.decreaseByPercentage(50, 35));
console.log(percentage.decreaseByPercentage(56, 0)); // edgecase of increasing value by zero
console.log(percentage.decreaseByPercentage(0, 56)); // edgecase of increasing zero by some percentage

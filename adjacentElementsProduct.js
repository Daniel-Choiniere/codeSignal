// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
  let calcNumbers = [];

  for (let i = 1; i < inputArray.length; i++) {
    let product = inputArray[i - 1] * inputArray[i];
    calcNumbers.push(product);
  }

  // console.log(calcNumbers);
  let largestNumber = Math.max(...calcNumbers);
  return largestNumber;
}

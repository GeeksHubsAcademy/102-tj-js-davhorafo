function numPrimo(input) {
  numbers = [];
  if (input <= 1) {
    return -1;
  }
  for (let i = 0; i <= input; i++) {
    if (isPrime(i)) numbers.push(i);
  }

  return numbers;
}
function isPrime(number) {
  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++)
    if (number % i === 0) return false;
  return number > 1;
}
console.log(numPrimo(500));
module.exports = numPrimo;

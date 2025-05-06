function LuhnAlgorithm(number) {
  // Convert the number to a string and split it into an array of digits
  const digits = number.replace(/\s+/g, '').split('').map(Number);

  // Reverse the digits for processing
  const reversedDigits = digits.reverse();

  // Double every second digit from the right
  for (let i = 1; i < reversedDigits.length; i += 2) {
    let doubled = reversedDigits[i] * 2;
    // If the result is greater than 9, subtract 9
    if (doubled > 9) {
      doubled -= 9;
    }
    reversedDigits[i] = doubled;
  }

  // Sum all the digits
  const sum = reversedDigits.reduce((acc, digit) => acc + digit, 0);

  // Check if the sum is divisible by 10
  return sum % 10 === 0;
}
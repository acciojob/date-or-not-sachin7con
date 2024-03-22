var isDate = function (input) {
  //SGN   write your code here
	  if (Object.prototype.toString.call(input) === "[object Date]") {
    // If it's a valid Date object, return true
    return !isNaN(input.getTime());
  }

  // Check if input is a string
  if (typeof input === 'string' || input instanceof String) {
    // Attempt to parse the string into a Date
    const parsedDate = new Date(input);
    // Check if parsing was successful and it's a valid date
    return !isNaN(parsedDate.getTime());
  }

  // If input is neither Date object nor string, return false
  return false;

	
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

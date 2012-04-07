// Create an array with 6 items
var numbers = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six"
];

// Remove the 5th item.
var fifthItem = numbers.splice(4, 1);

// Make the 5th item the first item
numbers.unshift(fifthItem[0]);

// Remove the last item
var lastItem = numbers.pop();

// Make the last item the 2nd item
numbers.splice(1, 0, lastItem);

// Remove the 3rd and 4th items and make them the last two items
var thirdAndFourth = numbers.splice(2, 2);
numbers.push(thirdAndFourth[0]);
numbers.push(thirdAndFourth[1]);

// What is the value of the 3rd item now?
alert(numbers[2]);
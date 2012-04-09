/*
Is your user old enough to vote? Drink? Rent a car? Run for president? Retire?
*/

var age = +prompt("How old are you?");
	
if (!age || isNaN(age)) {
	alert("You're too old to tell us your age?");
} else {
	if ((age >= 18) && (age < 21)) {
		alert("You are old enough to vote.");
	} else if ((age >= 21) && (age < 25)) {
		alert("You are old enough to vote and drink.");
	} else if ((age >= 25) && (age < 40)) {
		alert("You are old enough to vote, drink, and rent a car.");
	} else if ((age >= 40) && (age < 65)) {
		alert("You are old enough to vote, drink, rent a car, and serve as President.");
	} else if (age >= 65) {
		alert("You are old enough to vote, drink, rent a car, serve as President, and retire.");
	} else {
		alert("You are too young to vote, drink, rent a car, serve as President, or retire.");
	}
}

/*
Multiplication Table: pick a number? How many multiplication values do you want? 
Example input: 9, 3. 
Example output: 9 x 1 = 9, 9 x 2 = 18, 9 x 3 = 27
*/

// for loop solution
var table = +prompt("Pick a number.");
var rows = +prompt("How many multiplication values do you want?");

for (var i = 0; i < rows; i++) {
	alert(table + " x " + (i + 1) + " = " + (table * (i + 1)));
}

// while loop solution
var table = +prompt("Pick a number.");
var rows = +prompt("How many multiplication values do you want?");
var i = 0;

while (i < rows) {
	i++;
	alert(table + " x " + i + " = " + (table * i));
}

/*
Have the user guess your number. Tell them they're warm if close or cold if far off
*/

var secretNumber = 22;
var guess = +prompt("Guess a number between 1 and 50.");

while(guess && !isNaN(guess)) {
	if (guess != secretNumber) {
		if (Math.abs(secretNumber - guess) <= 5) {
			guess = +prompt("Close! Guess the number again.");
		} else {
			guess = +prompt("Cold. Guess the number again.");
		}
	} else {
		break;
	}
}

if (guess == secretNumber) {
	alert("You got it! The number was " + secretNumber + "!");
} else {
	alert("The secret number was " + secretNumber);
}
// Define a function that writes your name to the console.
function writeNameToConsole() {
	console.log("Estelle");
}

// Call that function
writeNameToConsole();

// Change your function so it accepts a name as a parameter
function writeNameToConsole(userName) {
	console.log(userName);
}

// Call that function
writeNameToConsole("Estelle");

// Define a function that takes a first name and last name and write the initials to the console.
function writeInitialsToConsole(firstName, lastName) {
	console.log(firstName.substring(0,1) + " " + lastName.substring(0,1));
}

// Create another function that asks the user for their first and last names.
function askForName() {
	var firstName = prompt("Enter your first name.");
	var lastName = prompt("Enter your last name.");
}

// Make the second function call the first function, passing the names.
function askForName() {
	var firstName = prompt("Enter your first name.");
	var lastName = prompt("Enter your last name.");
	writeInitialsToConsole(firstName, lastName);
}

// Make it run by calling the 2nd function
askForName();

// Extra: make it so the first function only takes 1 value and returns only 1 initial. Call it 2x.
function writeInitialToConsole(userName) {
	console.log(userName.substring(0,1));
}
function askForName() {
	var firstName = prompt("Enter your first name.");
	var lastName = prompt("Enter your last name.");
	writeInitialToConsole(firstName);
	writeInitialToConsole(lastName);
}

// Jeremiah Bonus: ask for the first and last name together
function askForFullName() {
	var fullName = prompt("Enter your first and last name.");
	var firstName = fullName.slice(0, fullName.indexOf(" "));
	var lastName = fullName.slice(fullName.indexOf(" ") + 1);
	writeInitialToConsole(firstName);
	writeInitialToConsole(lastName);
}
//adds two numbers and returns result
function add(value1, value2) {
	return value1 + " plus " + value2 + " = " + value1 + value2;
}

//divide two numbers and returns result
function divide(value1, value2) {
	return value1 + " divided by " + value2 + " = " + value1 / value2;
}

//multiply two numbers and returns result
function multiply(value1, value2) {
	return value1 + " multiplied " + value2 + " = " + value1 * value2;
}

//function to return today's date formatted
function getFormattedDate() {
	let now = new Date();

	let days = new Array(
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	);

	let months = new Array(
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	);

	let date = (now.getDate() < 10 ? "0" : "") + now.getDate();

	today =
		days[now.getDay()] +
		", " +
		months[now.getMonth()] +
		" " +
		date +
		", " +
		getFourDigits(now.getYear());

	return today;
}

//function to get four digit year format
function getFourDigits(number) {
	return number < 1000 ? number + 1900 : number;
}

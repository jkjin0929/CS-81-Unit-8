// Joseph K. Jin
// CS 81
// Assignment 8
// Chapter 6
// Problem #5

//function that calculates tip amount depending on user input
var tipCalc = function () {
	var amount = document.getElementById("original_amount").value;
	var tip_percent = document.getElementById("tip_rate").value;
	var tip = amount * (tip_percent/100);
	alert(tip_percent + "% tip from $" + amount + " is $" + tip.toFixed(2));
};

//start function that triggers tipCalc function when user clicks apply button
var start = function () {
	document.getElementById("apply_tip").addEventListener("click", tipCalc, false);
};

window.addEventListener( "load", start, false );
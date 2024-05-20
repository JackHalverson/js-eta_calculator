var distance = parseFloat(prompt("Enter the distance to destination in miles"));
var speed = parseFloat(prompt("Enter speed in mph"));

var eta = distance/speed

alert("Your current ETA is: " + eta.toFixed(2))

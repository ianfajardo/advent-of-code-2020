var fs = require("fs");
var path = require("path");

var filePath = path.resolve(__dirname, "input.txt");

//read data
var data = fs.readFileSync(filePath, "utf8");

//turn data to array
var vals = data.split("\n");

var validPasswords = 0;

for (let i = 0; i < vals.length; i++) {
  var element = vals[i];

  //indices - 1 since no concept of index 0
  var first = parseInt(element.split("-")[0]) - 1;
  var second = parseInt(element.split("-")[1].split(" ")[0]) - 1;

  var letter = element.split(" ")[1].split(":")[0];

  var password = element.split(": ")[1];

  //make sure values aren't bigger than the string, otherwise not valid
  if (
    (password[first] === letter && password[second] !== letter) ||
    (password[first] !== letter && password[second] === letter)
  ) {
    validPasswords++;
  }
}

console.log("# of Valid Passwords: " + validPasswords);

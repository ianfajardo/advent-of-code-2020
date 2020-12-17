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

  var min = element.split("-")[0];
  var max = element.split("-")[1].split(" ")[0];

  var letter = element.split(" ")[1].split(":")[0];

  var password = element.split(": ")[1];

  console.log(min + "-" + max + " " + letter + ": " + password);

  var match = password.match(new RegExp(letter, "g"));

  if (match != null) {
    if (match.length >= min && match.length <= max) {
      validPasswords++;
    }
  }
}

console.log("# of Valid Passwords: " + validPasswords);

var fs = require("fs");
var path = require("path");

var filePath = path.resolve(__dirname, "input.txt");

//read data
var data = fs.readFileSync(filePath, "utf8");

//turn data to array
var vals = data.split("\n");

var valObjs = [];

var tempObj = {};

var validPassports = 0;

console.log(vals.length);

//loop and create array with objects
for (let i = 0; i < vals.length; i++) {
  const e = vals[i];

  var line = e.split(" ");

  if (line[0] != "" && line.length > 0) {
    for (var j = 0; j < line.length; j++) {
      var f = line[j];
      var key = f.split(":")[0];
      var value = f.split(":")[1];
      tempObj[key] = value;
    }
  }

  if (line[0] == "" || i == vals.length - 1) {
    valObjs.push(tempObj);
    tempObj = {};
  }
}

console.log(valObjs.length);

for (let i = 0; i < valObjs.length; i++) {
  const e = valObjs[i];

  //if all 7 then valid
  if (
    e.hasOwnProperty("byr") &&
    e.hasOwnProperty("iyr") &&
    e.hasOwnProperty("eyr") &&
    e.hasOwnProperty("hgt") &&
    e.hasOwnProperty("hcl") &&
    e.hasOwnProperty("ecl") &&
    e.hasOwnProperty("pid")
  ) {
    validPassports++;
  }
}

console.log(validPassports);

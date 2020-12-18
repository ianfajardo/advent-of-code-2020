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

for (let i = 0; i < valObjs.length; i++) {
  const e = valObjs[i];

  var hasProperties =
    e.hasOwnProperty("byr") &&
    e.hasOwnProperty("iyr") &&
    e.hasOwnProperty("eyr") &&
    e.hasOwnProperty("hgt") &&
    e.hasOwnProperty("hcl") &&
    e.hasOwnProperty("ecl") &&
    e.hasOwnProperty("pid");

  var validProperties = false;

  //if properties are present -> do validation
  if (hasProperties) {
    var birth =
      e.byr.length == 4 && parseInt(e.byr) >= 1920 && parseInt(e.byr) <= 2002;
    var issue =
      e.iyr.length == 4 && parseInt(e.iyr) >= 2010 && parseInt(e.iyr) <= 2020;
    var expiration =
      e.eyr.length == 4 && parseInt(e.eyr) >= 2020 && parseInt(e.eyr) <= 2030;

    var height = false;

    if (e.hgt.indexOf("in") > -1 || e.hgt.indexOf("cm") > -1) {
      var num = 0;
      if (e.hgt.indexOf("in") > -1) {
        num = e.hgt.split("in")[0];
        if (parseInt(num) >= 59 && parseInt(num) <= 76) {
          height = true;
        }
      } else {
        num = e.hgt.split("cm")[0];
        if (parseInt(num) >= 150 && parseInt(num) <= 193) {
          height = true;
        }
      }
    }

    var hair = e.hcl.match(/^#[0-9a-f]{6}$/i) != null;

    var eyes =
      e.ecl === "amb" ||
      e.ecl === "blu" ||
      e.ecl === "brn" ||
      e.ecl === "gry" ||
      e.ecl === "grn" ||
      e.ecl === "hzl" ||
      e.ecl === "oth"
        ? true
        : false;

    var passport = e.pid.match(/^\d{9}$/) != null;

    validProperties =
      birth && issue && expiration && height && hair && eyes && passport;
  }

  //if all 7 then valid
  if (validProperties) {
    validPassports++;
  }
}

console.log(validPassports);

var fs = require("fs");
var path = require("path");

var filePath = path.resolve(__dirname, "input.txt");

var correctSum = 2020;

//read data
var data = fs.readFileSync(filePath, "utf8");

//turn data to array
var vals = data.split("\n");

var nums = [];

//loop and find difference of sum

//loop and double subtract
loop1: for (let i = 0; i < vals.length; i++) {
  var element = vals[i];

  var diff = correctSum - element;

  loop2: for (let j = 0; j < vals.length; j++) {
    var element2 = vals[j];

    var diff2 = Math.abs(diff - element2);

    if (
      vals.indexOf(diff2.toString()) > -1 &&
      parseInt(element) + parseInt(element2) + parseInt(diff2) == 2020 &&
      diff2 != 0
    ) {
      nums.push(element);
      nums.push(element2);
      nums.push(diff2);

      console.log(element + "+" + element2 + "+" + diff2 + "=" + correctSum);
      break loop1;
    }
  }
}

if (nums.length == 3) {
  console.log(nums[0] * nums[1] * nums[2]);
}

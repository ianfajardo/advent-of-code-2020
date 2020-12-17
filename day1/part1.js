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
for (let i = 0; i < vals.length; i++) {
  var element = vals[i];

  var diff = correctSum - element;

  //if diff is already in array then solution is found, break;
  if (vals.indexOf(diff.toString()) > -1) {
    nums.push(element);
    nums.push(diff);
    console.log(element + "+" + diff + "=" + correctSum);
    break;
  }
}

if (nums.length == 2) {
  //multiply nums
  console.log(nums[0] * nums[1]);
}

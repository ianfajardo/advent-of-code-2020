var fs = require("fs");
var path = require("path");

var filePath = path.resolve(__dirname, "input.txt");

//read data
var data = fs.readFileSync(filePath, "utf8");

//turn data to array
var vals = data.split("\n");

function treeCheck(x, y) {
  var xPos = 0;
  var yPos = 0;

  var xInc = x;
  var yInc = y;

  var width = vals[0].length;

  var treesHit = 0;

  //will reach bottom when i hits the bottom of the max height of this
  for (let i = 0; i < vals.length; i = i + yInc) {
    const e = vals[i];

    //find position and if you hit a tree, if its over width of tree circle reset to 0 and add remainder
    if (xPos >= width) {
      xPos = xPos - width;
    }

    var position = vals[i][xPos];

    if (position === "#") {
      treesHit++;
    }

    //increment x position & loop with increment y position
    xPos = xPos + xInc;
  }

  return treesHit;
}

console.log("Right 1, down 1: " + treeCheck(1, 1));
console.log("Right 3, down 1: " + treeCheck(3, 1));
console.log("Right 5, down 1: " + treeCheck(5, 1));
console.log("Right 7, down 1: " + treeCheck(7, 1));
console.log("Right 1, down 2: " + treeCheck(1, 2));

var multiplied =
  treeCheck(1, 1) *
  treeCheck(3, 1) *
  treeCheck(5, 1) *
  treeCheck(7, 1) *
  treeCheck(1, 2);

console.log("Multiplied: " + multiplied);

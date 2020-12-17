var fs = require("fs");
var path = require("path");

var filePath = path.resolve(__dirname, "input.txt");

//read data
var data = fs.readFileSync(filePath, "utf8");

//turn data to array
var vals = data.split("\n");

var xPos = 0;
var yPos = 0;

var xInc = 3;
var yInc = 1;

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

console.log(treesHit);

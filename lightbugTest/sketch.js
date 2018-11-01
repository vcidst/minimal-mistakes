var world = {
	width: 50,
	height: 50,
	renderedCellSize: 20,
	paused: false,
	cells: [],
	initiallyClickedCellState: 0
};

function setup() {
  noStroke();
  frameRate(10);
  createCanvas(world.width * world.renderedCellSize, world.height * world.renderedCellSize);
  
  var populateButton = createButton('Populate');
  populateButton.mousePressed(function() {
    populateWorld(0.2);
  });
}

function draw() {
  fill(255, 255, 255);
  background(255);
  // Draw a hover cell when mouse moves
  if (isMouseInBounds(world)) {
    var xx = posToCellBounds(world.renderedCellSize, mouseX);
    var yy = posToCellBounds(world.renderedCellSize, mouseY);
    drawHoveredCell(xx, yy, world.renderedCellSize);
    
    // change state of cell when clicked
    if (mouseIsPressed) {
      console.log("MousePress!");
    }
  }
}

// draws a cell
function drawHoveredCell(x, y, side) {
  fill(0, 0, 255, 128);
  ellipse(x, y, side, side);
}

// calculates which cell is mouse in
function posToCellBounds(cellSize, n) {
  return n - (n % cellSize);
}

// checks if mouse is in the bounds of sketch
function isMouseInBounds(width, height, size) {
  var w = world.width * world.renderedCellSize;
  var h = world.height * world.renderedCellSize;
  
  if (mouseX > 0 && mouseY > 0 && mouseX < w && mouseY < h) {
    return true;
  } else {
    return false;
  }
}

// fill some cells
function populateWorld(density) {
  console.log("I am in populate world and width is " + world.width + ".");
  world.cells = buildArray(world.width, world.height, populate(density));
}

// build array
function buildArray(w, h, pred) {
  console.log("I am in buildArray() and width is " + world.width + ".");
  var arr = [];
  for (var i=0; i<w; i+=1) {
    var arrRow = [];
    for (var j=0; j<h; j+=1) {
      arrRow.push = pred(i, j);
    }
    arr.push = arrRow;
  }
  console.log("end of buildArray and width is " + world.width + ".");
  return arr;
}

// make a uniform density function
// for a two-dimensional array
// given a coefficient
function populate(coefficient) {
  return function(x, y) {
    if (Math.random() < coefficient) {
      return 1;
    } else {
      return 0;
    }
  }
}
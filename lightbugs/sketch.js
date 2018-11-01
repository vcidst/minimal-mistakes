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
  
  // Next Button
  var nextButton = createButton('Next');
  nextButton.mousePressed(function() {
    drawWorld(world);
    var neighbourCounts = census(world);
    world = nextGeneration(world, neighbourCounts);
  });
  
  // Clear Button
  var clearButton = createButton('Clear');
  clearButton.mousePressed(function() {
    world = clearWorld(world);
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
      changeCellState(world, xx / world.renderedCellSize, yy / world.renderedCellSize);
    }
  }
}

// draws a cell
function drawHoveredCell(x, y, side) {
  fill(0, 0, 255, 128);
  ellipse(x, y, side, side);
}

// draws the world
function drawWorld(world) {
  fill(0, 0, 0);
  
  world.cells.forEach(function(rowArray, yIndex) {
    rowArray.forEach(function(cellState, xIndex) {
      if(cellState === 1) {
        ellipse(xIndex * world.renderedCellSize, yIndex * world.renderedCellSize,
        world.renderedCellSize, world.renderedCellSize);
      }
    });
  });
}

// modulo function
function actualModulo(divisor, dividend) {
  var fakeMod = divisor % dividend;
  if(fakeMod < 0) {
    return dividend + fakeMod;
  } else {
    return fakeMod;
  }
}

// checks if mouse is in the bounds of sketch
function isMouseInBounds(world) {
  var w = world.width * world.renderedCellSize;
  var h = world.height * world.renderedCellSize;
  
  if (mouseX > 0 && mouseY > 0 && mouseX < w && mouseY < h) {
    return true;
  } else {
    return false;
  }
}

// calculates which cell is mouse in
function posToCellBounds(cellSize, n) {
  return n - (n % cellSize);
}

// build array
function buildArray(w, h, pred) {
  var arr = Array(w);
  for (var i=0; i<w; i+=1) {
    var arrRow = Array(h);
    for (var j=0; j<h; j+=1) {
      arrRow[j] = pred(i, j);
    }
    arr[i] = arrRow;
  }
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

// see if anyone nearby is on
function sumNeighbors(cells, w, h, x, y) {
  return cells[y][actualModulo(x - 1, w)] + cells[y][actualModulo(x + 1, w)] + cells[actualModulo(y - 1, h)][x] + cells[actualModulo(y + 1, h)][x] + cells[actualModulo(y - 1, h)][actualModulo(x - 1, w)] + cells[actualModulo(y - 1, h)][actualModulo(x + 1, w)] + cells[actualModulo(y + 1, h)][actualModulo(x - 1, w)] + cells[actualModulo(y + 1, h)][actualModulo(x + 1, w)];
}

// count neighbours for every cell in the world
function census(world) {
	var newNeighbourCounts = buildArray(world.width, world.height, function() {return 0;});

	world.cells.forEach(function(rowArray, yIndex) {
		rowArray.forEach(function(cellState, xIndex) {
			newNeighbourCounts[yIndex][xIndex] = sumNeighbors(world.cells, world.width, world.height, xIndex, yIndex);
		});
	});
	return newNeighbourCounts;
}

function nextGeneration(world, neighbourCounts) {
  world.cells.forEach(function(rowArray, yIndex) {
    rowArray.forEach(function(cellState, xIndex) {
      var count = neighbourCounts[yIndex][xIndex];
      var cellState = world.cells[yIndex][xIndex];
      
      if (world.cells[yIndex][xIndex]) {
        world.cells[yIndex][xIndex] = !world.cells[yIndex][xIndex];
      }
      
      if (count > 0) {
        world.cells[yIndex][xIndex] = 1;
      }
    })
  })
}

function changeCellState(world, x, y) {
  world.cells[y][x] = world.initiallyClickedCellState;
}

function populateWorld(density) {
  world.cells = buildArray(world.width, world.height, populate(density));
}

function clearWorld(world) {
  world.cells = buildArray(world.width, world.height, function() { return 0; });
  return world;
}
// https://archive.org/details/196175JohnWhitneyAnthology 19:55

let squares = [];
let numSquares; // Variable to control the number of squares

function setup() {
  createCanvas(800, 600); // Canvas size similar to the reference image
  background("#F5C015"); // Yellow background
  noFill();

  numSquares = 10; // Set the desired number of squares
  squares = generateSquares(numSquares); // Initialize the squares
}

function draw() {
  background("#F5C015"); // Redraw background to avoid trailing

  squares.forEach((square) => {
    // Update position
    square.x += square.speedX;
    square.y += square.speedY;

    // Bounce off walls
    if (square.x - square.size / 2 < 0 || square.x + square.size / 2 > width)
      square.speedX *= -1;
    if (square.y - square.size / 2 < 0 || square.y + square.size / 2 > height)
      square.speedY *= -1;

    // Gradually change size between minSize and maxSize
    square.size += square.sizeSpeed;
    if (square.size > square.maxSize || square.size < square.minSize) {
      square.sizeSpeed *= -1; // Reverse direction when hitting size limits
    }

    drawSquare(square);
  });
}

function generateSquares(count) {
  let squaresArray = [];
  for (let i = 0; i < count; i++) {
    let minSize = random(30, 60);
    let maxSize = random(80, 150);
    squaresArray.push({
      x: random(width),
      y: random(height),
      size: random(minSize, maxSize),
      minSize: minSize,
      maxSize: maxSize,
      sizeSpeed: random(0.2, 0.8), // Speed of size change
      speedX: random(-2, 2),
      speedY: random(-2, 2),
      color: color(random(50, 200), random(50, 200), random(50, 200), 150),
    });
  }
  return squaresArray;
}

function drawSquare(square) {
  stroke(square.color);
  strokeWeight(2);
  rectMode(CENTER);
  rect(square.x, square.y, square.size, square.size);
}

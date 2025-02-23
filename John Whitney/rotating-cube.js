let angle = 0;

function setup() {
  createCanvas(800, 800, WEBGL); // 3D rendering
  strokeWeight(1.5);
  noFill();
}

function draw() {
  background(0); // Black background
  rotateX(angle * 0.3); // Smooth rotation
  rotateY(angle * 0.4);

  let cols = 5;
  let rows = 5;
  let spacing = 120;

  for (let x = -cols; x <= cols; x++) {
    for (let y = -rows; y <= rows; y++) {
      push();
      translate(x * spacing, y * spacing, 0); // Positioning cubes
      stroke(255, 100, 150, 150); // Pinkish stroke with transparency
      box(100); // Draw cube
      pop();
    }
  }

  angle += 0.01; // Increment angle for animation
}

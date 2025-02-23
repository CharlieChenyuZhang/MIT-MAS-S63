let font;

function preload() {
  font = loadFont(
    "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf"
  ); // Load a clean, modern font
}

function setup() {
  createCanvas(900, 400);
  colorMode(HSB, 360, 100, 100, 100); // Smooth color transitions
  textFont(font);
  textSize(100);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(0, 0, 0, 15); // Trailing effect for smooth animation

  let t = frameCount * 0.05; // Time variable for animation speed
  let points = font.textToPoints("chenyu zhang", 80, 250, 100, {
    sampleFactor: 0.25, // Controls point density
    simplifyThreshold: 0,
  });

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let angle = t + i * 0.2; // Phase offset for wave effect
    let wave = sin(angle) * 10; // Oscillation amplitude

    let x = pt.x + cos(angle * 1.5) * wave;
    let y = pt.y + sin(angle * 1.2) * wave;

    stroke((t * 40 + i * 2) % 360, 80, 100, 90); // Cycling colors
    point(x, y); // Draw animated points
  }
}

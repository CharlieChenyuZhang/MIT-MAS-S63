let colArray = [
  [255, 255, 255], // white
  [200, 5, 20], // red
  [55, 188, 25], // green
  [15, 35, 250], // blue
  [125, 235, 250], // light blue
  [240, 245, 15], // yellow
  [160, 60, 235], // purple
];

let grid = 100;
let margin = 150;

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(15, 20, 30);
  noFill();
  stroke(255);

  let d = grid * 0.6;

  for (let i = margin; i <= width - margin; i += grid) {
    for (let j = margin; j <= height - margin; j += grid) {
      let colArrayNum = floor(random(7));
      stroke(colArray[colArrayNum]);
      strokeWeight(3);

      for (let num = 0; num < 7; num++) {
        let x1 = -random(d);
        let y1 = -random(d);
        let x2 = random(d);
        let y2 = -random(d);
        let x3 = random(d);
        let y3 = random(d);
        let x4 = -random(d);
        let y4 = random(d);

        push();
        translate(i, j);
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
        pop();
      }
    }
  }

  // re-draw after 300ms
  // setTimeout(() => {
  //   redraw(); // Redraw once after 2 seconds
  // }, 300);
}

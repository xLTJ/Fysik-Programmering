let x = 200;
let y = 200;
let w = 50;
let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(280);
}

function draw() {
  rotation();
  print("working");
}

function rotation() {
  translate(200, 200);
  rotate(angle);
  angle = angle + 1;
  ellipse(100, 100, 50, 50);
}

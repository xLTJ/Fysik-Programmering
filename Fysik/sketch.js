let x = 200;
let y = 200;
let w = 50;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(280);
}

function draw() {
  background(200);
  layout();
  rotation();
  print("working");
}

function layout() {
  fill("white");
  ellipse(windowWidth / 2, windowHeight / 2, 100);
  noFill();
  ellipse(windowWidth / 2, windowHeight / 2, 290);
}

function rotation() {
  fill("white");
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  angle += 0.01;
  ellipse(100, 100, 50, 50);
}

//ok
//no

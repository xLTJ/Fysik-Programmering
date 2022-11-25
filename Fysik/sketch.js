let x = 200;
let y = 200;
let w = 50;
let angle = 0;
let ring1Dist = 200;
let rotationSpeed = 0.01;
let electronDistance = 1;

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
  fill(199, 0, 57);
  ellipse(windowWidth / 2, windowHeight / 2, 100);
  noFill();
  ellipse(windowWidth / 2, windowHeight / 2, ring1Dist * 2);
}

function rotation() {
  fill(46, 134, 193);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  angle += rotationSpeed;
  ellipse(electronDistance * 200, 0, 50, 50);
}

//ok
//no

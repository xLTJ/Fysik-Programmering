let x = 200;
let y = 200;
let w = 50;
let angle = 0;
let ringDist = 100; //standart ring distance fra centrum
let rotationSpeed = 0.01; //siger sig selv
let electronDistance = 2; //hvilken ring elektronen er i
let test = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(280);
}

function draw() {
  background(200);
  layout();
  rotation();

  test += 1;
  print(test);
  if (test > 500) {
    eletronDistance += 1;
  }
}

//midten og ringene etc.
function layout() {
  fill(199, 0, 57);
  ellipse(windowWidth / 2, windowHeight / 2, 50);
  for (ring = 2; ring < 6; ring++) {
    createRing(ring);
  }
}

//
function rotation() {
  fill(46, 134, 193);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  angle += rotationSpeed;
  ellipse((electronDistance * ringDist) / 2, 0, 25);
}

function createRing(Distance) {
  noFill();
  ellipse(windowWidth / 2, windowHeight / 2, ringDist * Distance);
}

function eletronJump() {
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      eletronDistance += 1;
    }
  }
}

let x = 200;
let y = 200;
let w = 50;
let angle = 0;
let ringDist = 100; //standart ring distance fra centrum
let rotationSpeed = 0.01; //siger sig selv
let electronDistance = 1; //hvilken ring elektronen er i
let photon = false;
let photonColor = "blue";
let photonX;
let photonY;
let photonVx = 1;
let photonVy = 1.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(280);
}

function draw() {
  background(255);
  layout();
  photonThing();
  textThings();
  rotation();
  eletronJump();
}

//midten og ringene etc.
function layout() {
  fill(199, 0, 57);
  ellipse(windowWidth / 2, windowHeight / 2, 50);
  for (ring = 2; ring < 8; ring++) {
    createRing(ring);
  }
}

//
function rotation() {
  fill(46, 134, 193);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);
  angle += rotationSpeed;
  ellipse(((electronDistance + 1) * ringDist) / 2, 0, 25);
}

function createRing(Distance) {
  noFill();
  ellipse(windowWidth / 2, windowHeight / 2, ringDist * Distance);
}

function eletronJump() {
  if (keyIsDown(49)) {
    if (electronDistance > 1) {
      photonColor = "white";
      colorRing();
    }
    electronDistance = 1;
  }

  if (keyIsDown(50)) {
    if (electronDistance == 3) {
      photonColor = "red";
      colorRing();
    }
    if (electronDistance == 4) {
      photonColor = "cyan";
      colorRing();
    }
    if (electronDistance == 5) {
      photonColor = "blue";
      colorRing();
    }
    if (electronDistance == 6) {
      photonColor = "violet";
      colorRing();
    }
    electronDistance = 2;
  }

  if (keyIsDown(51)) {
    if (electronDistance > 3) {
      photonColor = "white";
      colorRing();
    }
    electronDistance = 3;
  }
  if (keyIsDown(52)) {
    if (electronDistance > 4) {
      photonColor = "white";
      colorRing();
    }
    electronDistance = 4;
  }
  if (keyIsDown(53)) {
    if (electronDistance > 5) {
      photonColor = "white";
      colorRing();
    }
    electronDistance = 5;
  }
  if (keyIsDown(54)) {
    if (electronDistance > 6) {
      photonColor = "white";
      colorRing();
    }
    electronDistance = 6;
  }

  function colorRing() {
    photonX = windowWidth / 2;
    photonY = windowHeight / 2;
    photon = true;
    print("ok");
    photonVx = random(-3, 3);
    photonVy = random(-3, 3);
  }
}

function photonThing() {
  if (photon == true) {
    fill(photonColor);
    ellipse(photonX, photonY, 20);
    photonX += photonVx;
    photonY += photonVy;
  }
}

function textThings() {
  text("electron Distance = " + electronDistance, 100, 100);
}

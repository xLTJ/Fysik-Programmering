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
// formler variabler
let h = -6.63 * 10 ** -34;
let c = 3.0 * 10 ** 8;
let R = 1.097 * 10 ** 7;
let nm = 1000000000;
let wave = 0;
let energi = 0;
let length = 1;
let formula1 = "##";
let formula2 = "##";
let E1 = -2.181933 * 10 ** -18;
let E2 = -5.4548325 * 10 ** -19;
let E3 = -2.42437 * 10 ** -19;
let E4 = -1.363708125 * 10 ** -19;
let E5 = -8.727732 * 10 ** -20;
let E6 = -6.060925 * 10 ** -20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(280);
  console.log(c / (E1 - E2));
}

function draw() {
  background(255);
  layout();
  photonThing();
  textThings();
  rotation();
  eletronJump();
  waveLength();
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
  /*
  noFill();
  noStroke();
  stroke("red");
  strokeWeight(2);
  */
  fill("red");
  //linje til højre
  rect(0, 0, width / 4.5, height / 300);
  rect(0, height / 4.5, width / 4.5, height / 300);
  //linje ned
  rect(0, 0, width / 600, height / 4.5);
  rect(width / 4.5, 0, width / 600, height / 4.45);
  // tekst

  fill(0);
  text("Calculations: ", width / 300, 25);
  text(formula1, width / 300, 50);
  text("Energy = " + energi + " J", width / 300, 75);
  text(formula2, width / 300, 100);
  text("Wave Length = " + wave + " nm", width / 300, 125);
  text("Electron number = " + electronDistance, width / 300, 150);
}

function waveLength() {
  // key 1
  if (keyIsDown(49)) {
    if (electronDistance == 2) {
      formula2 = "Formula 2 = h * ( c / (E1 - E2) ) * 1*10^9";

      wave = round(h * (c / (E1 - E2)) * nm);

      formula1 =
        "Formula 1 = " +
        "(" +
        round(E1, 20) +
        ")" +
        " - " +
        "(" +
        round(E2, 20) +
        ")";

      energi = round(E1 - E2, 20);

      console.log(wave);
    }
    if (electronDistance == 3) {
      formula2 = "Formula 2 = h * ( c / (E1 - E3) ) * 1*10^9";
      wave = round(h * (c / (E1 - E3)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E1, 20) +
        ")" +
        " - " +
        "(" +
        round(E3, 20) +
        ")";
      energi = round(E1 - E3, 20);
      console.log(wave);
    }
    if (electronDistance == 4) {
      formula2 = "Formula 2 = h * ( c / (E1 - E4) ) * 1*10^9";
      wave = round(h * (c / (E1 - E4)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E1, 20) +
        ")" +
        " - " +
        "(" +
        round(E4, 20) +
        ")";
      energi = round(E1 - E4, 20);
      console.log(wave);
    }
    if (electronDistance == 5) {
      formula2 = "Formula 2 = h * ( c / (E1 - E5) ) * 1*10^9";
      wave = round(h * (c / (E1 - E5)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E1, 20) +
        ")" +
        " - " +
        "(" +
        round(E5, 20) +
        ")";
      energi = round(E1 - E5, 20);
      console.log(wave);
    }
    if (electronDistance == 6) {
      formula2 = "Formula 2 = h * ( c / (E1 - E6) ) * 1*10^9";
      wave = round(h * (c / (E1 - E6)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E1, 20) +
        ")" +
        " - " +
        "(" +
        round(E6, 20) +
        ")";
      energi = round(E1 - E6, 20);
      console.log(wave);
    }
    electronDistance = 1;
  }
  // key 2
  if (keyIsDown(50)) {
    if (electronDistance == 3) {
      formula2 = "Formula 2 = h * ( c / (E2 - E3) ) * 1*10^9";
      wave = round(h * (c / (E2 - E3)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E2, 20) +
        ")" +
        " - " +
        "(" +
        round(E3, 20) +
        ")";
      energi = round(E2 - E3, 20);
      console.log(wave);
    }
    if (electronDistance == 4) {
      formula2 = "Formula 2 = h * ( c / (E2 - E4) ) * 1*10^9";
      wave = round(h * (c / (E2 - E4)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E2, 20) +
        ")" +
        " - " +
        "(" +
        round(E4, 20) +
        ")";
      energi = round(E2 - E4, 20);
      console.log(wave);
    }
    if (electronDistance == 5) {
      formula2 = "Formula 2 = h * ( c / (E2 - E5) ) * 1*10^9";
      wave = round(h * (c / (E2 - E5)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E2, 20) +
        ")" +
        " - " +
        "(" +
        round(E5, 20) +
        ")";
      energi = round(E2 - E5, 20);
      console.log(wave);
    }
    if (electronDistance == 6) {
      formula2 = "Formula 2 = h * ( c / (E2 - E6) ) * 1*10^9";
      wave = round(h * (c / (E2 - E6)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E2, 20) +
        ")" +
        " - " +
        "(" +
        round(E6, 20) +
        ")";
      energi = round(E2 - E6, 20);
      console.log(wave);
    }
    electronDistance = 2;
  }
  // key 3
  if (keyIsDown(51)) {
    if (electronDistance == 4) {
      formula2 = "Formula 2 = h * ( c / (E3 - E4) ) * 1*10^9";
      wave = round(h * (c / (E3 - E4)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E3, 20) +
        ")" +
        " - " +
        "(" +
        round(E4, 20) +
        ")";
      energi = round(E3 - E4, 20);
      console.log(wave);
    }
    if (electronDistance == 5) {
      formula2 = "Formula 2 = h * ( c / (E3 - E5) ) * 1*10^9";
      wave = round(h * (c / (E3 - E5)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E3, 20) +
        ")" +
        " - " +
        "(" +
        round(E5, 20) +
        ")";
      energi = round(E3 - E5, 20);
      console.log(wave);
    }
    if (electronDistance == 6) {
      formula2 = "Formula 2 = h * ( c / (E3 - E6) ) * 1*10^9";
      wave = round(h * (c / (E3 - E6)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E3, 20) +
        ")" +
        " - " +
        "(" +
        round(E6, 20) +
        ")";
      energi = round(E3 - E6, 20);
      console.log(wave);
    }
    electronDistance = 3;
  }
  // key 4
  if (keyIsDown(52)) {
    if (electronDistance == 5) {
      formula2 = "Formula 2 = h * ( c / (E4 - E5) ) * 1*10^9";
      wave = round(h * (c / (E4 - E5)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E4, 20) +
        ")" +
        " - " +
        "(" +
        round(E5, 20) +
        ")";
      energi = round(E4 - E5, 20);
      console.log(wave);
    }
    if (electronDistance == 6) {
      formula2 = "Formula 2 = h * ( c / (E4 - E6) ) * 1*10^9";
      wave = round(h * (c / (E4 - E6)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E4, 20) +
        ")" +
        " - " +
        "(" +
        round(E6, 20) +
        ")";
      energi = round(E4 - E6, 20);
      console.log(wave);
    }
    electronDistance = 4;
  }
  // key 5
  if (keyIsDown(53)) {
    if (electronDistance == 6) {
      formula2 = "Formula 2 = h * ( c / (E5 - E6) ) * 1*10^9";
      wave = round(h * (c / (E5 - E6)) * nm);
      formula1 =
        "Formula 1 = " +
        "(" +
        round(E5, 20) +
        ")" +
        " - " +
        "(" +
        round(E6, 20) +
        ")";
      energi = round(E5 - E6, 20);
      console.log(wave);
    }
    electronDistance = 5;
  }
  // key 6
  if (keyIsDown(54)) {
    electronDistance = 6;
  }
}

let xPos;
let yPos;
let diam1;
let diam2;
let legsX = [50, 70, 90, 110];
let legsY = [260, 270, 270, 260];
let orangeColor;
let cloudSize;
let heartAngle;

function setup() {
  xPos = 470;
  yPos = 90;
  diam1 = 40;
  createCanvas(600, 400);
  orangeColor = '#ff9933';
  diam2 = 60;
  cloudSize = 1;
  heartAngle = 0;
}

function draw() {  
  background(220);
  
  strokeWeight(6);
  line(160, 0, 160, 150);
  line(160, 150, 80, 180);
  line(160, 150, 180, 190);
  line(160, 150, 250, 180);
  line(430, 0, 430, 230);
  
  strokeWeight(1);
  line(80,180, 80, 220);
  line(180, 190, 180, 250); 
  line(250, 180, 250, 220);

  push();
  rotate(frameCount * 0.03);
  fill('#40A0FF');
  quad(140, 230, 220, 260, 210, 350, 130, 315);
  fill(200);
  circle(177, 294, 40);
  
  stroke(255, 255, 0);
  strokeWeight(3);
  line(140, 230, 210, 350);
  line(220, 260, 130, 315);
  pop();
  
  push();
  translate(515, 210);
  if (frameCount % 105 == 0) {
    heartAngle += 15;
 }
  rotate(radians(heartAngle));
  stroke('#660000');
  fill(255, 0, 0);
  triangle(0, 60, -20, -48, 50, -27);
  arc(-3, -42, 35, 40, radians(190), radians(17));
  arc(32, -32, 35, 40, radians(190), radians(30));
  pop();
  
  stroke(1);
  strokeWeight(5);
  line(510, 210, 340, 250);
  
  push();
  
  diam2 += cloudSize;
if (diam2 > 110) {
  cloudSize = -1;
}
if (diam2 < 60) {
  cloudSize = 1;
}
  noStroke();
  fill(255);
  ellipse(340, 270, 130, 70);
  circle(320, 235, diam2);
  circle(370, 240, diam2);
  circle(390, 270, diam2);
  circle(300, 270, diam2);
  pop();
  
  stroke('#663300');
  strokeWeight(4);
  fill('#ffcccc');
  ellipse(80, 230, 90, 30);
  strokeWeight(5);
  
  for (let i = 0; i < legsX.length; i++) {
  let wave = sin(frameCount * 0.05 + i) * 10;
  line(legsX[i], 238, legsX[i] + wave, legsY[i]);
}
  push();
  if (frameCount % 180 == 0) {
  orangeColor = color(random(255), random(255), random(255));
}
  stroke('#00ff00');
  fill(orangeColor);
  ellipse(250, 225, 50, 50);
  stroke(1);
  point(250, 213);
  pop();
  
 if (xPos > 385 && yPos > 50) {
  xPos -= 0.5;
  yPos -= 0.25;
} else {
  if (diam1 > 0) {
    diam1 -= 0.5;
  }
}
  stroke('#004080');
  strokeWeight(4);
  fill('#ffff99');
  quad(330, 25, 420, 25, 400, 70, 370, 70);
  stroke(1);
  strokeWeight(5);
  line(385, 50, 470, 90);
  fill('#004080');
  arc(xPos, yPos, diam1, diam1, radians(290), radians(160), PIE);
}



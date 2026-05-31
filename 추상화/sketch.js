function setup() {
  createCanvas(600, 400);
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

  fill('#40A0FF');
  quad(140, 230, 220, 260, 210, 350, 130, 315);
  fill(200);
  circle(177, 294, 40);
  
  stroke(255, 255, 0);
  strokeWeight(3);
  line(140, 230, 210, 350);
  line(220, 260, 130, 315);
  
  stroke('#660000');
  fill(255, 0, 0);
  triangle(500, 270, 480, 160, 550, 180);
  arc(497, 167, 35, 40, radians(190), radians(14));
  arc(532, 177, 35, 40, radians(190), radians(30));
  stroke(1);
  strokeWeight(5);
  line(510, 210, 340, 250);
  
  noStroke();
  fill(255);
  ellipse(340, 270, 130, 70);
  circle(320, 235, 60);
  circle(370, 240, 60);
  circle(390, 270, 60);
  circle(300, 270, 60);
  
  stroke('#663300');
  strokeWeight(4);
  fill('#ffcccc');
  ellipse(80, 230, 90, 30);
  strokeWeight(5);
  line(50, 238, 50, 260);
  line(70, 240, 70, 270);
  line(90, 240, 90, 270);
  line(110, 238, 110, 260);
  
  stroke('#00ff00');
  fill('#ff9933');
  ellipse(250, 225, 50, 50);
  stroke(1);
  point(250, 213);
  
  stroke('#004080');
  strokeWeight(4);
  fill('#ffff99');

  quad(330, 25, 420, 25, 400, 70, 370, 70);
  
  stroke(1);
  strokeWeight(5);
  line(385, 50, 470, 90); 
  
  fill('#004080');
  arc(470, 90, 40,40, radians(290), radians(160), PIE);

}

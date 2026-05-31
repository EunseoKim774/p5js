function setup() {
  createCanvas(600, 400);
}

function draw() {
  noStroke();
  background(233);
  fill("#000066");
  rect(212, 310, 180, 100);
  arc(390, 345, 70, 70, radians(270), radians(0));
  arc(212, 345, 70, 70, radians(180), radians(270));
  rect(177, 345, 40, 160);
  rect(385, 345, 40, 100);

  fill("#ffe0e0");
  arc(207, 200, 40, 50, radians(10), radians(333));
  arc(390, 200, 40, 50, radians(180), radians(130));
  rect(276, 280, 50, 60);
  fill("#e0c0c0");
  ellipse(300, 288, 50, 30);
  fill("#ffe0e0");
  ellipse(300, 194, 180, 203);
  arc(302, 300, 100, 90, radians(10), radians(170), OPEN);
  
  fill(255);
  ellipse(340, 189, 40, 25);
  ellipse(260, 189, 40, 25);
  
  stroke(1);
  strokeWeight(2);
  noFill();
  arc(340, 186, 40, 22, radians(180), radians(360));
  arc(260, 186, 40, 22, radians(180), radians(360));
  
  fill(1);
  ellipse(339, 188, 20, 22);
  ellipse(261, 188, 20, 22);
  
  fill(254);
  circle(342, 185, 7);
  circle(265, 185, 7);
  
  fill("#202020");
  stroke("#202020");
  curve(320, 90, 292, 94, 197, 178, 40, 10);
  curve(3, 300, 287, 92, 400, 196, 600, 20);
  arc(281, 173, 165, 166, radians(175), radians(280), OPEN);
  arc(307, 173, 186, 166, radians(261), radians(30), OPEN);
  
  stroke(1);
  fill(1);
  line(324, 202, 355, 202);
  line(277, 202, 245, 202);
  line(265, 310, 300, 360);
  line(340, 305, 300, 360);
  triangle(372, 177, 348, 175, 360, 182);
  triangle(227, 177, 251, 175, 239, 182);
  
  line(354, 202, 361, 197);
  line(246, 202, 238, 197);
  line(300, 200, 290, 225);
  line(290, 225, 299, 229);
  point(300, 225);
  point(350, 250);
  quad(235, 269, 260, 288, 280, 400, 220, 400);
  noFill();
  arc(346, 186, 60, 30, radians(195), radians(320));
  arc(254, 186, 60, 30, radians(215), radians(340));
  fill("#80ffff");
  circle(300, 360, 10);
  
  noStroke();
  fill("#ffcccc");
  arc(300, 248, 40, 25, radians(349), radians(190));
  arc(290, 250, 24, 10, radians(180), radians(360));
  arc(310, 250, 24, 10, radians(186), radians(350));
  ellipse(365, 216, 40, 30);
  ellipse(235, 216, 40, 30);
  
  stroke(1);
  noFill();
  arc(300, 242, 45, 23, radians(10), radians(165));
  line(380, 360, 380, 500);
  line(230, 360, 230, 500);
  
  strokeWeight(1);
  fill(1);
  quad(319, 153, 350, 153, 369, 159, 318, 159);
  quad(280, 153, 245, 153, 228, 159, 281, 159);
}


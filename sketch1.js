function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  ellipse(200, 200, 200, 300)

  textSize(20)
  fill(0,0,0);
  text('mouse x : '+ mouseX,0,20 )
  text('mouse Y : '+ mouseY,0,40)
}
function CarL() {
  this.x = random(width / 2 - 35, width / 2 - 50);
  this.y = random(-550, -750);

  this.speed = 3.5;

  //draw the car
  this.show = function () {
    rectMode(CENTER);
    stroke(0);
    //draw the body of the car
    fill(255);
    rect(this.x, this.y, 45, 75);
    //draw the widows of the car
    fill(0);
    rect(this.x, this.y - 20, 35, 7);
    rect(this.x, this.y + 10, 35, 10);
    //draw the headlights of the car
    fill(200, 200, 0, 225);
    circle(this.x - 15, this.y + 30, 7);
    circle(this.x + 15, this.y + 30, 7);
    //draw the exaust pipe
    rectMode(CORNER);
    fill(100);
    rect(this.x - 15, this.y - 41.5, 3, 4);
  }

  //make the cars move
  this.move = function () {
    this.y += this.speed;
  }

}

function CarR() {

  this.x = random(width / 2 + 35, width / 2 + 50);
  this.y = random(-50, -200);

  this.speed = 2;

  //draw the car
  this.show = function () {
    rectMode(CENTER);
    stroke(0);
    //draw the body of the car
    fill(30, 54, 120);
    rect(this.x, this.y, 45, 75);
    //draw the widows of the car
    fill(0);
    rect(this.x, this.y - 10, 35, 10);
    rect(this.x, this.y + 20, 35, 7);
    //draw the headlights of the car
    fill(200, 200, 0, 225);
    circle(this.x - 15, this.y - 30, 7);
    circle(this.x + 15, this.y - 30, 7);
    //draw the exaust pipe
    rectMode(CORNER);
    fill(100);
    rect(this.x - 15, this.y + 37.5, 3, 4);
  }

  //make the cars move
  this.move = function () {
    this.y += this.speed;
  }


}
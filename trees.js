function Tree1() {

  this.x1 = 35;
  this.y1 = random(-50, -100);
  this.speed = 3;

  this.show = function () {
    //draw the tree on the left
    noStroke();
    fill(77, 62, 32);
    rect(this.x1 + 7, this.y1, 15, 50);

    fill(0, 255, 0, 245);
    circle(this.x1, this.y1, 35);
    circle(this.x1 + 30, this.y1, 35);
    circle(this.x1 + 15, this.y1 - 25, 35);
    circle(this.x1, this.y1 - 15, 35);
    circle(this.x1 + 27, this.y1 - 15, 35);
  }

  //make the trees move
  this.move = function () {
    this.y1 = this.y1 + this.speed;
  }

}

function Tree2() {

  this.x2 = width - 65;
  this.y2 = random(-250, -300);
  this.speed = 3;


  this.show = function () {

    //draw the tree on the right

    noStroke();
    fill(77, 62, 32);
    rect(this.x2 + 7, this.y2, 15, 50);

    fill(0, 255, 0, 245);
    circle(this.x2, this.y2, 35);
    circle(this.x2 + 30, this.y2, 35);
    circle(this.x2 + 15, this.y2 - 25, 35);
    circle(this.x2, this.y2 - 15, 35);
    circle(this.x2 + 27, this.y2 - 15, 35);
  }

  //make the trees move
  this.move = function () {
    this.y2 = this.y2 + this.speed;
  }

}
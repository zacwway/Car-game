function Road() {

  this.x = width / 2;
  this.y = height / 2

  this.show = function () {
    //draw the road
    stroke(0);
    strokeWeight(1);
    fill(75);
    rectMode(CENTER);
    rect(this.x, this.y, 150, height);
    //draw the lines on the road
    fill(200, 200, 0);
    rect(this.x - 4, this.y, 5, height);
    rect(this.x + 4, this.y, 5, height);
    //draw the grass on the left
    fill(7, 128, 35);
    rectMode(CORNER);
    rect(0, 0, 125, height);
    //draw the grass on the right
    rect(275, 0, 125, height);
    //draw the wall on the left
    fill(175);
    rect(this.x - 100, 0, 10, height);
    //draw the wall on the right
    rect(this.x + 90, 0, 10, height);
  }




}
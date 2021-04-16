function Player() {
    this.x = width / 2 + 41;
    this.y = height / 2 + 100;
  
    this.visibility1 = 150;
    this.visibility2 = 200;
    this.visibility3 = 250;
  
    this.turnSpeed = 3;
    this.acceleration = 5
  
    //draw the car
    this.show = function() {
      rectMode(CENTER);
      stroke(0);
      strokeWeight(1);
      //draw the body of the car
      fill(255, 0, 0);
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
      
      //draw the exaust fumes
      noStroke();
      
      fill(200, this.visibility1);
      circle(this.x - 13.5, this.y + 44, 3);
      
      fill(200, this.visibility2);
      circle(this.x - 13.5, this.y + 47, 3);
  
      fill(200, this.visibility3);
      circle(this.x - 13.5, this.y + 50, 3);
      
      //exaust animation
      this.visibility1 = this.visibility1 - 5;
      this.visibility2 = this.visibility2 - 5;
      this.visibility3 = this.visibility3 - 5;
      if (this.visibility1 == 0) {
        this.visibility1 = 255;
      }
  
      if (this.visibility2 == 0) {
        this.visibility2 = 255;
      }
  
      if (this.visibility3 == 0) {
        this.visibility3 = 255;
      }
    }
  
    //make the player move when they press the arrow keys
    this.move = function() {
      if (keyIsDown(LEFT_ARROW)) {
        this.x = this.x + this.turnSpeed * -1;
      }
  
      if (keyIsDown(RIGHT_ARROW)) {
        this.x = this.x + this.turnSpeed;
      }
  
      if (keyIsDown(UP_ARROW)) {
        this.y = this.y - this.acceleration;
      }
  
      if (keyIsDown(DOWN_ARROW)) {
        this.y = this.y + this.acceleration;
      }
    }
  
    //make the player unable to go off the road
    this.borders = function() {
      if (this.y > height - 37.5) {
        this.y = height - 37.5;
      }
      if (this.y < 37.5) {
        this.y = 37.5;
      }
      if (this.x > width - 134) {
        this.x = width - 134;
      }
      if (this.x < 134) {
        this.x = 134;
      }
    }
  }
var player;
var carL;
var carR;
var road;
var tree1;
var tree2;

function setup() {
  createCanvas(400, 525);
  player = new Player();
  carL = new CarL();
  carR = new CarR();
  road = new Road();
  tree1 = new Tree1();
  tree2 = new Tree2();

}

function draw() {
  background(0);
  var edge = height + 35;

  //tell the player how to play the game
  noStroke();
  fill(255);
  textSize(25);
  text('Try not to hit any of the other cars.', 5, 250);
  text('Use the arrow keys to move.', 35, 300);
  textSize(15);
  text('Press one of the arrow keys to start.', 75, 350);

  //Start the game when the player pressed one of the arrow keys
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    if (tree1.y1 > edge) {
      tree1 = new Tree1();
    }

    if (tree2.y2 > edge) {
      tree2 = new Tree2();
    }

    if (carL.y > edge) {
      carL = new CarL();
    }

    if (carR.y > edge) {
      carR = new CarR();
    }

    road.show();

    tree1.show();
    tree1.move();

    tree2.show();
    tree2.move();

    carL.show();
    carL.move();

    carR.show();
    carR.move();

    player.show();
    player.move();
    player.borders();

    //end the game if the player hits the car on the left
    if (player.x - 22 < carL.x + 22 && player.x + 22 > carL.x - 22 && player.y + 37 > carL.y - 37 && player.y - 37 < carL.y + 37) {
      player.acceleration = 0;
      player.turnSpeed = 0;
      carL.speed = 0;
      carR.speed = 0;
      tree1.speed = 0;
      tree2.speed = 0;

      fill(0);
      rectMode(CORNER);
      rect(0, 0, width, height);
      fill(255);
      textSize(75);
      text('Game Over', 5, 250);
    }

    //end the game if the player hits one of the cars on the right
    if (player.x - 22 < carR.x + 22 && player.x + 22 > carR.x - 22 && player.y + 37 > carR.y - 37 && player.y - 37 < carR.y + 37) {
      player.acceleration = 0;
      player.turnSpeed = 0;
      carL.speed = 0;
      carR.speed = 0;
      tree1.speed = 0;
      tree2.speed = 0;

      fill(0);
      rectMode(CORNER);
      rect(0, 0, width, height);
      fill(255);
      textSize(75);
      text('Game Over', 5, 250);
    }
  }
}
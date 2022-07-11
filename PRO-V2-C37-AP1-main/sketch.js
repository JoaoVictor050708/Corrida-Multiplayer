var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1, car1Img;
var car2, car2Img;
var cars=[]
var track;
var fuels;
var powerCoins;
var powerCoinsImg, fuelsImg;
var obstacles;
var obstacleImg1, obstacleImg2;
var lifeImg;
var blastImg;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelsImg = loadImage ("./assets/fuel.png");
  powerCoinsImg = loadImage("./assets/goldCoin.png");
  obstacleImg1 = loadImage("./assets/obstacle1.png");
  obstacleImg2 = loadImage("./assets/obstacle2.png");
  lifeImg= loadImage("./assets/life.png")
  blastImg=loadImage("./assets/blast.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();
}

function draw() {
  background(backgroundImage);

  if (playerCount===2) {
    game.update(1)
  }
  if (gameState===1) {
    game.play()
  }
  if (gameState==2) {
    game.showLeaderboard()
    game.end()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

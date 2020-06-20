const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var batsman;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  batsman = new Batsman(50, 50);
}

function draw() {
  background(0);  

  batsman.display();
}
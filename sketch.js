const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObje;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,690,width,50);
	dustbinObj = new dustbin(1200,650);
	paperObje = new paper(400,400,20);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  paperObje.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObje.body,paperObje.body.position,{x:0.07,y:-0.07});
	}
}

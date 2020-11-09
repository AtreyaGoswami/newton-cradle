
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  var bob1 display();
  var bob2 display();
  var bob3 display();
  var bob4 display();
  var bob5 display();
  var roof display();
  
  drawSprites();
 
}




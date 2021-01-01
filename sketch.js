
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var ground;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,50,50);
	bob2 = new Bob(300,50,50);
	bob3 = new Bob(400,50,50);
	bob4 = new Bob(500,50,50);
	bob5 = new Bob(600,50,50);

	ground = new Ground(400, 50, 800, 100)

	rope1 = new Rope(bob1.body, ground.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, ground.body, -bobDiameter*2, 0);
	rope3 = new Rope(bob3.body, ground.body, -bobDiameter*2, 0);
	rope4 = new Rope(bob4.body, ground.body, -bobDiameter*2, 0);
	rope5 = new Rope(bob5.body, ground.body, -bobDiameter*2, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground.display();

  drawSprites();
 
}




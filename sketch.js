
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var hammer1;
var stone1;
var rubber1;
var sand1,sand2,sand3,sand4,sand5,sand6;
var iron1;

function setup() {
	createCanvas(1200, 600);

   engine = Engine.create();
	world = engine.world;

	ground1 = new ground(600,height,1200,20);
	hammer1 = new hammer(200,200)
	stone1 = new stone(400,500);
	rubber1 = new rubber(800,500,50);
	sand1 = new sand(600,500,5);
	sand2 = new sand(610,500,5);
	sand3 = new sand(620,500,5);
	sand4 = new sand(630,500,5);
	sand5 = new sand(640,500,5);
	sand6 = new sand(650,500,5);
	sand7 = new sand(660,500,5);
	sand8 = new sand(670,500,5);
	iron1 = new iron(500,500);

	
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  Engine.update(engine);

  ground1.display();
  hammer1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  iron1.display();
  
  drawSprites();
 
}




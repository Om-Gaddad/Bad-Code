
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	paper1  = new Paper(100,200,50);
  ground = new Ground(400,650,800,25);
  
	box1 = new Box(510,575,100,PI);
	box2 = new Box(580,610,100,PI/2);
	box3 = new Box(620,575,100,PI);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  Engine.update(engine);

  paper1.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();


  text(mouseX + "," + mouseY, mouseX,mouseY)

  
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dust1=new Dustbin(width-150,height-50,200,20)
	dust2=new Dustbin(width-50,height-90,20,100)
	dust3=new Dustbin(width-250,height-90,20,100)
	
	ground=new Ground(600,height-29,1200,20)
	
    paper=new Paper(50,200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dust1.display();
  dust2.display();
  dust3.display();
  
  ground.display();
  
  paper.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) 
  Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-3.5})   
   }





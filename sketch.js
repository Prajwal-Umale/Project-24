
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;
var ground;
var paper;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	rect1 = new Dustbin(800,490,30,200);
	rect2 = new Dustbin(1015,550,400,30);
	rect3 = new Dustbin(1230,490,30,200);

	ground = new Ground(750,580,1500,20);

	paper = new Ball(10,500,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
	background(0);
	
	console.log(paper.y);


  rect1.display();
  rect2.display();
  rect3.display();

  ground.display();

  paper.display();

  

  }

  function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:510,y:-510})
	}
  }

	



var ball
var groundSprite
var box1, box2, box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1365, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=createSprite(width/1.2,height-60,200,20)
	box2=createSprite(width/1.32,height-100,20,100)
	box3=createSprite(width/1.10,height-100,20,100)

	box10 = Bodies.rectangle(width/1.2,height-60,200,20,{isStatic:true})
	World.add(world,box1)
	box20 = Bodies.rectangle(width/1.32,height-100,20,100,{isStatic:true})
	World.add(world,box2)
	box30 = Bodies.rectangle(width/1.10,height-100,20,100,{isStatic:true})
	World.add(world,box3)

	box1.shapeColor=color(255)
    box2.shapeColor=color(255)
	box3.shapeColor=color(255)

    ball = new Ball(200,300,20)
	ball.shapeColor=color("pink")
	//abc = Bodies.rectangle(200,200,200,200)
	// World.add(world,abc)
	
	groundSprite=createSprite(width/2,height-50,width,10)
	groundSprite.shapeColor=color("yellow")
	
	ground = Bodies.rectangle(width/2,height-50,width,10,{isStatic:true});
	 World.add(world,ground);
	
	Engine.run(engine);
  
}

function draw() {
  
  background(0);
  Engine.update(engine)
  ball.bounce();
  //rectMode(CENTER)
  //rect(abc.position.x,abc.position.y,200,200)
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}




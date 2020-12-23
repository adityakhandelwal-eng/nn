
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,world,engine,ground,box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
  }
  ball=Bodies.circle(100,660,50,options)
  World.add(world,ball);
   
    ground=new Ground(200,700,2000,20)
  World.add(world,ground);
    box1=new Box1(600,640,20,120)
    box2=new Box2(650,640,120,20)
    box3=new Box3(700,640,20,120)
	Engine.run(engine);
	
}



function draw() {
  
  background(800);
  ground.display();
  box1.display();
  box2.display();
  box3.display(); 
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30);
keyPressed();
 
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(ball,position,force)
  }
}



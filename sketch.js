
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var ground;
var chain;
var boxes=[];
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
    
	ground =new Ground(600,600,1200,20);
   ball= new Ball(200,200,50);
chain=new Slingshot(ball.body,{x:500,y:50})
for(var i=0;i<7;i++){
var box1 =new Box (900,100,70,70);
var box2 =new Box (800,100,70,70);
var box3 =new Box (700,100,70,70);
boxes.push(box1);
boxes.push(box2);
boxes.push(box3);
}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  chain.display();

  for(var i=0;i<boxes.length;i++){
	  boxes[i].display();
  }
}
 function mouseClicked(){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-90});
 }



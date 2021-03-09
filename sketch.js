
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj, groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    stones=new stone(100,400,50)
	mango1=new mango(1100,100,30);
    mango2=new mango(1000,100,30);
	mango3=new mango(900, 200,30);
	mango4=new mango(1050,200,30);
	mango5=new mango(1200,200,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	rope=new Rope(stones.body,{x:240,y:420});
	World.add(world,rope);
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  

  treeObj.display();
  stones.display();
  rope.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   rope.fly()
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stones.body,{x:235,y:420});
		launcherObject.attach(stones.body);
	}
}
function detectCollision(stones,mangoPos){
	mangoPosBodyPosition=mangoPos.body.position
	stonesBodyPosition=stones.body.position

	var distance=dist(stonesBodyPosition.x, stonesBodyPosition.y, mangoPosBodyPosition.x, mangoPosBodyPosition.y)
	if(distance<=mangoPos.r+stones.r){
		Matter.Body.setStatic(mangoPos.body,false);
	}
}
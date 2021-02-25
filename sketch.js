
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var roundObject1,roundObject2,roundObject3, roundObject4,roundObject5, stoneObject
var sling1,sling2,sling3, sling4,sling5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	stoneObject=new stone(width/2,height/4,width/7,20);

	roundDiameter=40;

	startroundPositionX=width/2;
	startroundPositionY=height/4+500;
	roundObject1=new round(startroundPositionX-roundDiameter*2,startroundPositionY,roundDiameter);
	roundObject2=new round(startroundPositionX-roundDiameter,startroundPositionY,roundDiameter);
	roundObject3=new round(startroundPositionX,startroundPositionY,roundDiameter);
	roundObject4=new round(startroundPositionX+roundDiameter,startroundPositionY,roundDiameter);
	roundObject5=new round(startroundPositionX+roundDiameter*2,startroundPositionY,roundDiameter);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	sling1=new sling(roundObject1.body,stoneObject.body,-roundDiameter*2, 0)

	sling2=new sling(roundObject2.body,stoneObject.body,-roundDiameter*1, 0)
	sling3=new sling(roundObject3.body,stoneObject.body,0, 0)
	sling4=new sling(roundObject4.body,stoneObject.body,roundDiameter*1, 0)
	sling5=new sling(roundObject5.body,stoneObject.body,roundDiameter*2, 0)

	Engine.run(engine)

  
}


function draw() {
  rectMode(CENTER);
  background(150);
  stoneObject.display();

  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()	
  roundObject1.display();
  roundObject2.display();
  roundObject3.display();
  roundObject4.display();
  roundObject5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(roundObject1.body,roundObject1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	roundBodyPosition=constraint.bodyA.position
	stoneBodyPosition=constraint.bodyB.position

	stoneBodyOffset=constraint.pointB;
	
	stoneBodyX=stoneBodyPosition.x+stoneBodyOffset.x
	stoneBodyY=stoneBodyPosition.y+stoneBodyOffset.y
	line(roundBodyPosition.x, roundBodyPosition.y, stoneBodyX,stoneBodyY);
}







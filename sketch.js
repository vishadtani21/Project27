const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
	roof=new Roof (550,200,150,30);

	
	bob1=new Bob (490,330,20);
	bob2=new Bob (520,330,20);
	bob3=new Bob (550,330,20);
	bob4=new Bob (580,330,20);
	bob5=new Bob (610,330,20);
	

	rope1=new Rope (bob1.body,{x:490,y:200});
	rope2=new Rope (bob2.body,{x:520,y:200});
	rope3=new Rope (bob3.body,{x:550,y:200});
	rope4=new Rope (bob4.body,{x:580,y:200});
	rope5=new Rope (bob5.body,{x:610,y:200});


}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-10});
	}
} 

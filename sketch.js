
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

Engine.update(engine);
World.update(world);
Bodies.update(bodies);
Body.update(body);

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
     var plane_options={
		isStatic: true
		
	 }

	 var rotator_options={
		isStatic: true
		
	 }

	Engine.run(engine);
    
	plane = Bodies.rectangle(200,390,400,20,plane_options);
	World.add(world,plane);

	block1 = Bodies.rectangle(100,10,20,plane_options);
   World.add(world,block1);

   block2 = Bodies.rectangle(100,10,20,plane_options);
   World.add(world,block2);
  
   Fill("black")
   rectMode(CENTER);
   ellipseMode(RADIUS);

   rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);

	Matter.Body.rotator(rotator1,angle1);
	Push();
	Translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	Pop();
	angle1 +=0.2

	Matter.Body.rotator(rotator2,angle2);
	Push();
	Translate(rotator2.position.x,rotator2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	Pop();
	angle2 +=0.3

	Matter.Body.rotator(rotator3,angle3);
	Push();
	Translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	Pop();
	angle3 +=0.4
	
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  
  drawSprites();
 
}




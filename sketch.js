
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var wallObj;
var wall2Obj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	
	ButtonH = createImg("right.png");
	ButtonH.position(200, 50);
	ButtonH.size(50,50);

	ball = Bodies.circle(400, 10, 20);
	World.add(world,ball);
	
	groundObj = new Ground(400, 690, 800, 10);
	WallObj = new Ground(700, 690, 10, 200);
	Wall2Obj = new Ground(600, 690, 10, 200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show();
  WallObj.show();
  Wall2Obj.show();
  ButtonH.mouseClicked(hForce);
  ellipse(ball.position.x, ball.position.y, 20);
 
}

function keyPressed() {
	if (keycode === UP_ARROW) {
		Body.applyForce(ball, ball.position, { x:0.05, y: -0.05})
		
};
}

function hForce() {
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.01,y:-0.01})
  };
  

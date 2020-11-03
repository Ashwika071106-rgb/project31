
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;

var ground,platform;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

var polygon;

var rope;

var gameState = "inHand";

var score = 0;

var bg = "sprites/bg1.png" , backgroundImg;

function preload()
{
	getBackgroundImg();
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	ground = new Ground(500,height,1000,30);
	platform = new Ground(710,450,400,40);

	box1 = new Box(590,415,40,50);
	box2 = new Box(630,415,40,50);
	box3 = new Box(670,415,40,50);
	box4 = new Box(710,415,40,50);
	box5 = new Box(750,415,40,50);
	box6 = new Box(790,415,40,50);
	box7 = new Box(830,415,40,50);

	box8 = new Box2(630,350,40,50);
	box9 = new Box2(670,350,40,50);
	box10 = new Box2(710,350,40,50);
	box11 = new Box2(750,350,40,50);
	box12 = new Box2(790,350,40,50);

	box13 = new Box3(670,305,40,50);
	box14 = new Box3(710,305,40,50);
	box15 = new Box3(750,305,40,50);

	box16 = new Box4(710,260,40,50);

	polygon = new Polygon(100,250,30,30);

	rope = new Rope(polygon.body,{x:50,y:250});
	

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	if(backgroundImg){
		background(backgroundImg);
	}
	noStroke();
	textSize(35)
	fill("white")
	text("Score  " + score, 740, 50)

	ground.display();
	platform.display();

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();

	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();

	box13.display();
	box14.display();
	box15.display();
	
	box16.display();

	
	rope.display();

	polygon.display();

	//keyPressed();s
	drawSprites();
 
}

function mouseDragged(){
	if(gameState!= "launched"){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
	}
}

function mouseReleased(){
	rope.fly();
	gameState  = "launched"
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body,{x:50,y:250});
		rope.attach(polygon.body);
		gameState = "inHand";
	}
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
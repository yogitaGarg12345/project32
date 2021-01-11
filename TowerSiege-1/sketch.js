const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;

function preload()
{

	polygon_img = loadImage("Polygon.png")
}

function setup() {
  createCanvas(1300, 700);
  



	engine = Engine.create();
	world = engine.world;

	ground1 =  new Ground(650,450,250,16)
	ground2 = new Ground(900,235,250,16)

	block1 = new Block(550,415,40,50)
	block2 = new Block(590,415,40,50)
	block3 = new Block(630,415,40,50)
	block4 = new Block(670,415,40,50)
	block5 = new Block(710,415,40,50)
	block6 = new Block(750,415,40,50)

	block7 =new Block(570,365,40,50)
	block8 = new Block(610,365,40,50)
	block9 = new Block(650,365,40,50)
	block10 = new Block(690,365,40,50)
	block11 = new Block(730,365,40,50)

	block12 = new Block(590,315,40,50)
	block13 = new Block(630,315,40,50)
	block14 = new Block(670,315,40,50)
	block15 = new Block(710,315,40,50)

	block16 = new Block(630,265,40,50)
	block17 = new Block(670,265,40,50)

	block18 = new Block(650,215,40,50)

	block19 = new Block(815,200,40,50)
	block20 = new Block(855,200,40,50)
	block21 = new Block(895,200,40,50)
	block22 = new Block(935,200,40,50)
	block23 = new Block(975,200,40,50)

	block24 = new Block(855,150,40,50)
	block25 = new Block(895,150,40,50)
	block26 = new Block(935,150,40,50)

	block27 = new Block(895,100,40,50)

	 polygon = (100,350,100,100)
	 World.add(world,polygon)
	//Create the Bodies Here.

	slingshot= new Slingshot(polygon,{x:100,y:200})
  
    
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(100);


  Engine.update(engine);

  noStroke();
  textSize(37);
  fill("red")
  text("Score:"+score,1000,200)


  ground1.display();
  ground2.display();

  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();

  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();

  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();

  block16.display();
  block16.score();
  block17.display();
  block17.score();

  block18.display();
  block18.score();

  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  block22.display();
  block22.score();
  block23.display();
  block23.score();

  block24.display();
  block24.score();
  block25.display();
  block25.score();
  block26.display();
  block26.score();

  block27.display();
  block27.score();

 // polygon.display();

 imageMode = (CENTER)
 image(polygon_img,polygon.x,polygon.y,50,50)
  slingshot.display();
  


  
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingshot.fly();
  }
  function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon)
    }

}

async function getBackroundImg(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON = await response.json();

var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13)

if(hour>=06 && hour <= 06){
background("yellow")
}
else{
  background("black")
}

}





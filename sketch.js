
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bird, slingShot;
var Boy;







function preload()
{
	
}

function setup(){
    var canvas = createCanvas(1200,400);
    background("white")
    engine = Engine.create();
    world = engine.world;
      
 

   
  

    stone = new Stone(235,420,30);

    slingshot = new Slingshot(stone.body,{x:200,y:100});
  }
 




function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
    stone.display();
    slingshot.display();
 
}




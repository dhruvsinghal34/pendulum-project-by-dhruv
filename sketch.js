const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,c,circle,c1;

function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = Engine.world;

    let c = color(24,63,219);
    fill (c);
    box1 = new Box(300,100,50,10);
    
    let c1 = color(175,36,36);
    fill (c1);
    circle = new Pendulam(200,200,10); 
   
}

function draw(){
    background(209,200,200);
    Engine.update(engine);
    box1.display();
    circle.display();
}




 
  
   






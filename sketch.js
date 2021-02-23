const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bogey1,bogey2,bogey3,bogey4,bogey5,bogey6;
var chain1,chain2,chain3,chain4,chain4,chain5;
var ground;
var flag=0


function preload(){
    bg=loadImage("images/bg.jpg")
    trainsound=loadSound("sound/train.mp3")
    crashSound=loadSound("sound/train_crossing.mp3")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);
   

 bogey1=new bogey(50,170,50,50)
 bogey2=new bogey(150,170,50,50)
 bogey3=new bogey(250,170,50,50)
 bogey4=new bogey(350,170,50,50)
 bogey5=new bogey(450,170,50,50)
 bogey6=new bogey(550,170,50,50)

rock1=new rock(1100,200,100,100)

chain1=new chain(bogey1.body,bogey2.body)
chain2=new chain(bogey2.body,bogey3.body)
chain3=new chain(bogey3.body,bogey4.body)
chain4=new chain(bogey4.body,bogey5.body)
chain5=new chain(bogey5.body,bogey6.body)

   
}

function draw(){
    
        background(bg);
    

       
        
    Engine.update(engine);
    //strokeWeight(4);
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
bogey1.display()
bogey2.display()
bogey3.display()
bogey4.display()
bogey5.display()
bogey6.display()
rock1.display()
ground.display()
var collision=Matter.SAT.collides(bogey6.body,rock1.body)
if(collision.collided){
    flag=1
}
if(flag===1){
    textSize(30);
    stroke(3);
    fill("blue");
    text("CRASH",500,200);
crashSound.play();
}


}

function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
        Matter.Body.applyForce(bogey6.body,{x:bogey6.body.position.x,y:bogey6.body.position.y},{x:0.5,y:0})
trainSound.play();
    }



}



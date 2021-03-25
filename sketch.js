const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let wa =[];
let wa1 =[];
let wa2 =[];

var bg,s;
function preload() {
 s=loadSound('sound.mp3')
}

function setup() {
  createCanvas(3000,3000);
  s.play()
  bg = loadImage('Cloud.gif')
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  hero = new Hero(200,100);
  villen = new Villen(450,260);
  rope = new Rope(hero.body, {x:200,y:200});
 for ( var j = 165,  i=0; j <= 440,i<=10; j=j+20,i++)
 {
   
    wa[i]=new Wall(300,j,20,20);
    console.log(i)
 }
 for ( var j = 165,  i=0; j <= 440,i<=10; j=j+20,i++)
 {
   
    wa1[i]=new Wall(320,j,20,20);
    console.log(i)
 } 
 for ( var j = 165,  i=0; j <= 440,i<=10; j=j+20,i++)
 {
   
    wa2[i]=new Wall(340,j,20,20);
    console.log(i)
 }
 wall2=new Wall (450,300,50,50);
 wall1=new Ground (250,340,499,10);
}

function draw() {
  background(bg);

  for ( var j = 0; j <=8; j++)
  {
    wa[j].display()
  }
  for ( var j = 0; j <=8; j++)
  {
    wa1[j].display()
  }  
  for ( var j = 0; j <=8; j++)
  {
    wa2[j].display()
  }

  
  wall1.display()
 
 // wall2.display()
 //rope.display();
 villen.display();
 hero.display();
}
function  mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.hi()
}


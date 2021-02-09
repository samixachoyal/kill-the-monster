const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backImg;
var ground;
var hero;
var flys;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,
box11,box12;
var monster;

function preload() {

backImg=loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1900, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(500,650,1000,20);
hero = new Hero(300,400,250);

box = new Block(750,637,75,75);
box2 = new Block(750,562,75,75);
box3 = new Block(750,487,75,75);
box4 = new Block(750,412,75,75);
box5 = new Block(750,337,75,75);
box6 = new Block(750,262,75,75);
box7 = new Block(787,637,75,75);
box8 = new Block(787,562,75,75);
box9 = new Block(787,487,75,75);
box10 = new Block(787,412,75,75);
box11 = new Block(787,337,75,75);
box12 = new Block(787,262,75,75);
monster = new Monster(1200,300,200,200)

flys= new Fly(hero.body,{x:450,y:300});

}

function draw() {
  background(backImg);
  Engine.update(engine);
hero.display();
  ground.display();
  box.display();
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
  monster.display();
  flys.display();

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Cube1, Cube2, Cube3,Cube4,Cube5,Cube6,Cube7,Cube8,Cube9,Cube10,Cube11,Cube12,Cube13,Cube14,Cube15,Cube16,Cube17,Cube18,Cube19,Cube20, ground;
var ball, string

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1800, 50);
  ball = new Ball(150, 250, 100, 100);
  

  Cube0 = new Cube(900, 100, 50, 50);
  Cube1 = new Cube(900, 150, 50, 50);
  Cube2 = new Cube(900, 200, 50, 50);
  Cube3 = new Cube(900, 250, 50, 50);
  Cube4 = new Cube(900, 300, 50, 50);
  Cube5 = new Cube(900, 350, 50, 50);
  Cube6 = new Cube(900, 400, 50, 50);
  Cube7 = new Cube(900, 450, 50, 50);
  Cube8 = new Cube(800, 100, 50, 50);
  Cube9= new  Cube(800, 150, 50, 50);
  Cube10 = new Cube(800, 200, 50, 50);
  Cube11 = new Cube(800, 250, 50, 50);
  Cube12 = new Cube(800, 300, 50, 50);
  Cube13 = new Cube(800, 350, 50, 50);
  Cube14 = new Cube(800, 400, 50, 50);
  Cube15 = new Cube(700, 100, 50, 50);
  Cube16 = new Cube(700, 150, 50, 50);
  Cube17 = new Cube(700, 200, 50, 50);
  Cube18 = new Cube(700, 250, 50, 50);
  Cube19 = new Cube(700, 300, 50, 50);
  Cube20 = new Cube(700, 350, 50, 50);
  Cube21 = new Cube(600, 100, 50, 50);
  Cube22 = new Cube(600, 150, 50, 50);
  Cube23 = new Cube(600, 200, 50, 50);
  Cube24 = new Cube(600, 250, 50, 50);
  Cube25 = new Cube(600, 300, 50, 50);

  Cube26 = new Cube(1000, 100, 50, 50);
  Cube27 = new Cube(1000, 150, 50, 50);
  Cube28 = new Cube(1000, 200, 50, 50);
  Cube29 = new Cube(1000, 250, 50, 50);
  Cube30 = new Cube(1000, 300, 50, 50);
  Cube31 = new Cube(1000, 350, 50, 50);
  Cube32 = new Cube(1000, 400, 50, 50);

  Cube33 = new Cube(1100, 100, 50, 50);
  Cube34= new  Cube(1100, 150, 50, 50);
  Cube35 = new Cube(1100, 200, 50, 50);
  Cube36 = new Cube(1100, 250, 50, 50);
  Cube37 = new Cube(1100, 300, 50, 50);
  Cube38 = new Cube(1100, 350, 50, 50);

  Cube39 = new Cube(1200, 100, 50, 50);
  Cube40 = new Cube(1200, 150, 50, 50);
  Cube41 = new Cube(1200, 200, 50, 50);
  Cube42 = new Cube(1200, 250, 50, 50);
  Cube43 = new Cube(1200, 300, 50, 50);
  
  
  string = new String(ball.body, { x: 500, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  Cube1.display();
  Cube2.display();
  Cube3.display();
  Cube4.display();
  Cube5.display();
  Cube6.display();
  Cube7.display();
  Cube8.display();
  Cube9.display();
  Cube10.display();
  Cube11.display();
  Cube12.display();
  Cube13.display();
  Cube14.display();
  Cube15.display();
  Cube16.display();
  Cube17.display();
  Cube18.display();
  Cube19.display();
  Cube20.display();
  Cube21.display();
  Cube22.display();
  Cube23.display();
  Cube24.display();
  Cube25.display();
  Cube0.display();
  Cube26.display();
  Cube27.display();
  Cube28.display();
  Cube29.display();
  Cube30.display();
  Cube31.display();
  Cube32.display();
  Cube33.display();
  Cube34.display();
  Cube35.display();
  Cube36.display();
  Cube37.display();
  Cube38.display();
  Cube39.display();
  Cube40.display();
  Cube41.display();
  Cube42.display();
  Cube43.display();
  

  ball.display();
  string.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}



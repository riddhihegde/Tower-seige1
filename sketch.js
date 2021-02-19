const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,ground;
var block1,slingshot,polygon;

function preload() {

    polygon_img = loadImage("polygon.png");
   
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground()
    platform1 = new Platform(380, 300,270,10);
    platform2 = new Platform(700, 200, 200, 10);


    // set one
    //row1
    block1 =  new Block(280,275,30,40)
    block2 = new Block(310,275,30,40)
    block3 = new Block(340,275,30,40)
    block4 = new Block(370,275,30,40)
    block5 = new Block(400,275,30,40)
    block6 = new Block(430,275,30,40)
    block7 = new Block(460,275,30,40)
    block8 = new Block(490,275,30,40)
    //row2
    block9 = new Block(310,235,30,40)
    block10 = new Block(340,235,30,40)
    block11 = new Block(370,235,30,40)
    block12 = new Block(400,235,30,40)
    block13 = new Block(430,235,30,40)
    block14 = new Block(460,235,30,40)
    //row3
    block15 = new Block(340,195,30,40)
    block16 = new Block(370,195,30,40)
    block17 = new Block(400,195,30,40)
    block18 = new Block(430,195,30,40)
    //row4
    block19 = new Block(370,155,30,40)
    block20 = new Block(400,155,30,40)
    //row5
    block21 = new Block(385,115,30,40)

    //set two
    //row1
    blocks1 = new Block(640,175,30,40)
    blocks2 = new Block(670,175,30,40)
    blocks3 = new Block(700,175,30,40)
    blocks4 = new Block(730,175,30,40)
    blocks5 = new Block(760,175,30,40)
    //row2
    blocks6 = new Block(670,135,30,40)
    nlocks7 = new Block(700,135,30,40)
    blocks8 = new Block(730,135,30,40)
    //row3
    blocks9 = new Block(700,95,30,40)

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);


    slingshot = new SlingShot(this.polygon,{x:200, y:200});
}

function draw(){
    background("brown");
    Engine.update(engine);

    strokeWeight(2);
    stroke(15);
    platform1.display();
    platform2.display();

    stroke(15);
    fill("light blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    
    stroke(15);
    fill("light pink")
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    stroke(15);
    fill("light green");
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    stroke(15);
    fill("grey")
    block21.display();
    
    stroke(15);
    fill("light blue")
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();

    stroke(15);
    fill("light green");
    blocks6.display();
    blocks7.display();
    blocks8.display();

    stroke(15);
    fill("light pink");
    blocks9.display();
// ellispe(ball.position.x,ball.position.y,20);
     ground.display();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    polygon.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

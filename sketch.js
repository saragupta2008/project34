const Engine=Matter.Engine
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
const World=Matter.World

var engine,world;

function setup(){
canvas= createCanvas(windowWidth/2,windowHeight/1.5);
engine=Engine.create();
world=engine.world

/*let canvasmouse= Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
    mouse:canvasmouse
};

mConstraint = MouseConstraint.create(engine, options);
World.add(world,mConstraint);

 */     
pendulum1= new Pendulum(150,300,255);
pendulum2= new Pendulum(210,300,255);
pendulum3= new Pendulum(270,300,255);
pendulum4= new Pendulum(330,300,255);
pendulum5= new Pendulum(390,300,255);

sling1= new Sling(pendulum1,{x:20,y:20});
}


function draw(){
    background(0)
    Engine.update(engine)
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();
   
    sling1.display();
}


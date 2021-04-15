const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myEngine,myworld
var ground;

function setup() {
  createCanvas(500,500);
  myEngine=Engine.create()//myEngine.world
  myworld=myEngine.world

  var options={
    isStatic:true
  }



ground= Bodies.rectangle(250,480, 500, 10, options)
World.add(myworld,ground)
console.log(ground.position.x)

var ball_options={
  isStatic:false,
  restitution:1
}



ball= Bodies.circle(250,250,50 , ball_options)
World.add(myworld,ball)
}

function draw() {
  background ("green");  
 Engine.update(myEngine)
  rectMode(CENTER)
 
  rect(ground.position.x,ground.position.y,500,10)


  circle(ball.position.x,ball.position.y,50)
}
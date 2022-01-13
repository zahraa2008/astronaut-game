var bg,sleep,brush,gym,eat,bath,drink,move
var astronaut



function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400,200)
  astronaut.addImage(sleep)
  astronaut.scale=0.1
}

function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadImage("images/sleep.png");
  brush=loadImage("images/brush.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  eat=loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat1.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  gym.frameDelay=20
  move=loadAnimation("images/move.png")

  
}


function draw() {
  background(bg);  
  textSize(20)
  fill("white")
  text("instructions:",20,20)
  text("upArrow=brushing",20,40)
  text("downArrow=drinking",20,60)
  text("leftArrow=bathing",20,80)
  text("rightArrow=eating",20,100)
  text("space=gyming",20,120)
  text("m=moving",20,140)

  edges=createEdgeSprites()
  astronaut.bounceOff(edges)
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.x=100
    astronaut.y=300
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("drinking",drink)
    astronaut.changeAnimation("drinking")
    astronaut.x=700
    astronaut.y=300
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.x=105
    astronaut.y=300
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.x=650
    astronaut.y=300
  }

  if(keyDown("SPACE")){
    astronaut.addAnimation("gyming",gym)
    astronaut.changeAnimation("gyming")
    astronaut.x=400
    astronaut.y=300
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.velocityX=1
    astronaut.velocityY=2
  
  }


  drawSprites();


}

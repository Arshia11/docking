var spaceImg
var spaceCraftImg1
var spaceCraftImg2
var spaceCraftImg3
var spaceCraftImg4
var issImg
var iss
var spaceCraft
var hasDocked = false

function preload(){
  spaceImg=loadImage("spacebg.jpg")
  spaceCraftImg1=loadImage("spacecraft1.png")
  spaceCraftImg2=loadImage("spacecraft2.png")
  spaceCraftImg3= loadImage("spacecraft3.png")
  spaceCraftImg4=loadImage("spacecraft4.png")
  issImg=loadImage("iss.png")
  




}


function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  iss.scale=0.5
  spaceCraft=createSprite (400,300,50,50)
  spaceCraft.addImage(spaceCraftImg1)
  spaceCraft.scale=0.1
}

function draw() {
  background(spaceImg);  
  if(!hasDocked){
    //console.log("x pos " + spaceCraft.x)
   //console.log ( "y pos "  + spaceCraft.y)
    spaceCraft.x=spaceCraft.x+random (-1,+1)
    if(keyDown(UP_ARROW)){
      spaceCraft.y=spaceCraft.y-2
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(spaceCraftImg2)
    }
    if(keyDown(LEFT_ARROW)){
      spaceCraft.x=spaceCraft.x-2
      spaceCraft.addImage(spaceCraftImg3)
    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.x=spaceCraft.x+2
      spaceCraft.addImage(spaceCraftImg4)
    }
  }
    
  

    if(spaceCraft.x >=360 && spaceCraft.x<=370 && spaceCraft.y >=245 && spaceCraft.y<=255){
    hasDocked= true
    fill ("white")
    textSize(20)
    text ("Docking Successful", 200,100)
 
}
drawSprites();

}
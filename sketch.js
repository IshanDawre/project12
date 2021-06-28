var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
   if(keyDown(up)){
     rabbit.velocityY = -3;
   }

   if(keyDown(right)){
     rabbit.velocityX = 3;
   }

   if(keyDown(down)){
     rabbit.velocityY = 3;
   }

   if(keyDown(left)){
     rabbit.velocityX = -3;
   }

  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));
  if (frameCount % 80 ==0){
    if(select_sprites == 1) {
      //call createApples function
    }
    else{
      //call createLeaves function
    }
  }



  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  //Add image to apple sprite
  //Scale the sprite if required
  //Gice the velocity so that the apples move downloads
  //give lifetime to the apple sprite
}
  
function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  //Add image to leave sprite
  //Scale the sprite if required
  //Gice the velocity so that the leaves move downloads
  //give lifetime to the apple sprite
}

//Create variables here
var dogImage,happyDogImg,dog;
var database;
var food,foodVal,foodS;

function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  happyDogImg = loadImage("happydog.png");
  
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  foodVal = database.ref('Food');
  foodVal.on("value",readStock);
  
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg);
dog.scale = 0.2;
}
fill(0,255,255);
textSize(20);
text("Note: Press up arrow to feed Cleo",100,50);
drawSprites();
}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x){

  }
  database.ref('/').update({
    Food:x
  });
}




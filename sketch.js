//Create variables here
var dog
var  happyDog
var  database
var  foodS
var foodStock



function preload()
{
  //load images here
  
  happyDog = loadImage("images/dogImg1.png");
  dog = loadImage("images/dogImg.png");
  
}

function setup() {
  createCanvas(800,700);
  dog1 = createSprite(400,300,30,30);
  dog1.addImage(dog)


  //foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}

function draw() {  
  background(46,139,87);

if(keyWentDown(UP_ARROW)){

  writeStock(foodS);
  dog1.addImage(happyDog);

}

  drawSprites();
  //add styles here
  text("Food",200,200);
  textSize(200);
  fill (red);
}




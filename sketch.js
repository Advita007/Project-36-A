var dog,sadDog,happyDog;
var feedPet, addFood;
var foodObj


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodS = createSprite(200,200,10,10);

  feedPet = createButton("Feed the Dog");
  feedPet.position(700,95);
  feedPet.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods)

}

function draw() { 
  background(46,139,87);
  foodS.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getfoodStock() <= 0){
    foodObj.updateFoodstock(foodObj.getfoodStock()*0);

  }

  else{
    foodObj.updateFoodstock(foodObj.getfoodStock()-1)
  }
}


//function to add food in stock
function addFoods(){
  foodS++
  database.ref('/').update({
    Food: foodS
  })
}

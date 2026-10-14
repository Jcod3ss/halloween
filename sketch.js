let pumpkinY = 290;
let pumpkinSpeed = 4;

let ghostX = 180;
let ghostSpeed = 2;

let moonSize = 60;
let moonSpeed = 0.5;

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(35,20,70);


//moon
fill(255,230,120);
ellipse(320,70,60,60);


//floor
fill(35,50,10);
rect(0,350,400,50);

//pumpkin
fill(255,120,0);
ellipse(100,pumpkinY,70,60);

//pumpkin stem
fill(40,120,40);
rect(95,pumpkinY - 38,10,15);

//eyes
fill(0)
ellipse(90,pumpkinY - 6,8,10);
ellipse(115,pumpkinY - 10,8,10);

//pumpkin moving up and down
pumpkinY = pumpkinY + pumpkinSpeed;

if (pumpkinY > 310 || pumpkinY < 270){
  pumpkinSpeed = pumpkinSpeed * -1;
}
  
  //ghost
  fill(255);
  ellipse(ghostX,200,50,55);
  rect(ghostX - 25,200,50,30);
  
  //ghost eyes
  fill(0);
  ellipse(ghostX - 10,195,5,8);
  ellipse(ghostX + 10,195,5,8);
  
  //ghost moves horizantally
  ghostX = ghostX + ghostSpeed;
  
  if (ghostX > 350 || ghostX < 50){
    ghostSpeed = ghostSpeed * -1;
  }
  
  //moon grows and shrinks
  fill(255,230,120);
  ellipse(320,70, moonSize,moonSize);
  moonSize = moonSize + moonSpeed;
  
  if(moonSize > 80 || moonSize < 50){
    moonSpeed = moonSpeed * -1;
  }
//title
  fill(255,20,20);
    textSize(20);
  text("BOOOOOO",125,100);
    }
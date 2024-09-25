function setup()
{
  createCanvas(1000, 1000);
  background(220);
}

function draw() 
{
  rect(5,5,100,100)
  fill("blue");
  stroke("green");
  strokeWeight(5);
  
  if(mouseIsPressed)
    {
      rect(mouseX,mouseY,20,20);
    }
}
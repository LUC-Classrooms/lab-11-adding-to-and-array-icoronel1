
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); //creating an array/list with 1 element and assign to variable 'dots'

function setup() {
  createCanvas(500, 300); // canvas with width of 500 and height of 300 pixels
  dots[0] = new Dot(width/2, height/2); // initalize first element in array, assign coordinates to new dot object
} //end the setup function

function draw() {
  background(200); //grey color background

  //dots[0].display(); calling properties individually
  //dots[0].move();
  
  for(let i = 0; i < dots.length; i++){ //dots.length is length of array
    dots[i].move(); //move property of dot
    dots[i].display(); //display property for dot
  } //for loop using array, checks to see if argument/conditional is true
  textSize(24); //text size 
  fill(100, 0, 200); //purple color
  text("'dots' array length: " + dots.length, 100, 100); //text and display number of dots

}

function mousePressed(){ //when mouse is clicked, 1 action will take place
  let obj = new Dot(mouseX, mouseY); // creating new dot object, coordinate where mouse was clicked
  dots.push(obj); //push function in array, adds new element to array
  
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}


function Dot(X, Y){ // create function to hold info about dot
  
  this.x = X; // x coordinate property
  this.y = Y; // y coordinate property
  this.w = random (20, 50); // width or diameter of ellipse
  this.sx = random(-5, 5); // x coordinate speed increased by random number
  this.sy = random(-5, 5); // y coordinate speed increased by random number
  this.r = random(0, 255); // random red value
  this.g = random(0, 255); // random green value
  this.b = random(0, 255); // random blue value
  
  this.display = function(){ //method so ellipse appears on screen
    fill(this.r, this.g, this.b); // fill ellipse with random values for color
    ellipse(this.x, this.y, this.w, this.w); // ellipse properties of x coordinate, y coordinate, and diameter
  }
  
  this.move = function(){ //move method
    this.x += this.sx; // x coordinate increased by 1
    this.y += this.sy; // y coordinate increased by 1
    
    if (this.x < 0 || this.x > width){ //if ellipse is off screen on right or left side
        this.sx *= -1; // change directions
    }
    if (this.y < 0 || this.y > height){ // if ellipse is off screen vertically
        this.sy *= -1; // change directions
    }
  }
    
}

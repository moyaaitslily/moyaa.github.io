var x = 70; // Horizontal position of the first circle
var y = 150; // Vertical position of the first circle

var y2 = 20; //Vertical position of the second circle

var x3 = 200;
var y3 = 50;

var x4 = 600;
var y4 = 90;

var x5 = 300;
var y5 = 40;

var x6 = 600
var y6 = 60

function setup(){
    createCanvas(700,200);
}

function draw(){
    background("#FDE5D4"); // background

    //First movement
    fill("#D6CC99"); // Colour for the first circle
    circle(x,y,60); // A moving  circle with a diameter of 50
    x = (x - 2 + width ) % width; // Moves horizontally and wraps around

    //Second movement
    fill("#001524"); // Colour for the second circle
    circle(60,y2,20); //A moving circle wiha a diameter of 20
    y2 = (y2 + 0.5) % height; //Moves vertivally and wraps around

    //Third movement
    fill("#445D48")
    circle(x3,y3,35),
    noStroke();
    x3 = (x3 + 3) % width;

    //Forth movement
    fill("#5E3023")
    circle(x4,y4,15),
    noStroke();
    y4 = (y4 + 1) % height;

    //Fifth movement
    fill("#2B1A12")
    circle(x5,y5,40),
    noStroke();
    y5 = (y5 - 2 + height) % height;

  

}
var hr, hrAngle;
var mn, mnAngle;
var sc, scAngle;

var bg;

function preload()
{
    bg = loadImage("bg.jpg");
}

function setup() 
{
    createCanvas(400,400);  
    angleMode(DEGREES);
}

function draw() 
{
    if(bg);
    background(bg);

    translate(200, 200);
    rotate(-90);

    hr = hour();
    mn = minute();
    sc = second();

    hrAngle = map(hr%12, 0, 12, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    scAngle = map(sc, 0, 60, 0, 360);

    push();  
    rotate(hrAngle);
    stroke("blue");
    strokeWeight(8);
    line(0, 0, 40, 0);
    pop();

    push();  
    rotate(mnAngle);
    stroke("green");
    strokeWeight(6);
    line(0, 0, 70, 0);
    pop();
    
    push();  
    rotate(scAngle);
    stroke("red");
    strokeWeight(4);
    line(0, 0, 100, 0);
    pop();

    strokeWeight(10);
    noFill();

    stroke("blue");
    arc(0, 0, 240, 240, 0, hrAngle);

    stroke("green");
    arc(0, 0, 270, 270, 0, mnAngle);

    stroke("red");
    arc(0, 0, 300, 300, 0, scAngle);

    rotate(+90);
    noStroke();
    fill("white")
    textSize(30);
    text("12", -18, -170);
    text("3", 170, 5);
    text("6", 0, 180);
    text("9", -180, 5);
}
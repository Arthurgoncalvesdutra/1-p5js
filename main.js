var canvas;
var video;

function setup(){
    canvas=createCanvas(640, 480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 230, 150, 220, 200);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    fill(0, 250, 0);
    stroke(0, 250, 0);
    rect(40, 90, 20, 300);
 }
function tick(){
    save("foto.png");
}

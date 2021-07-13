function preload() {   
}
function setup() {
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tint_colour="";
}
function draw() {
    image(video,0,0,600,400);
    tint(tint_colour);
}
function take_snapshot() {
save("p5.png");
}
function filter1() {
tint_colour=document.getElementById("colour").value;
}
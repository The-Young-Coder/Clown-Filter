var nose_x = 0;
var nose_y = 0;

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
console.log(ml5.version);
posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposses);
}

function draw(){
image(video,0,0,300,300);
}

function preload(){

}

function modelLoaded(){
    console.log("Model Is Working");
}

function gotposses(result){
    if (result.length>0) {
      console.log(result);
      nose_x = result[0].pose.nose.x;
      nose_y = result[0].pose.nose.y;
      console.log(nose_x,nose_y);
    }

}
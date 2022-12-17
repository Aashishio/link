song = '';

leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;

function   preload(){
    song = loadSound('music.mp3');
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded); 
    poseNet.on('pose', gotPoses)
}

function gotPoses(results){
    
    if(results.lenght > 0) {
    
        
        console.log(results);

        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.Y;


    }

}

function modelLoaded(){
    console.log("Model has Loaded");
}

function draw(){
    image(video, 0,0, 500,400);

    fill("#f00");
    stroke("#f00");
    circle(leftWristX, leftWristY, 20);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
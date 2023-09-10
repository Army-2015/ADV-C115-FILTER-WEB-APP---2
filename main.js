function preload(){

}

function setup(){
    canvas= createCanvas(350, 350);
    canvas.position(508.5, 250);
    video= createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 350, 350);
}

function modelLoaded(){
    console.log("Model is Loaded!")
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("x position of nose is- " + results[0].pose.nose.x);
        console.log("y position of nose is- " + results[0].pose.nose.y);
    }
}
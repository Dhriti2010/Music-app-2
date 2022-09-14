song1="";
song2="";
function preload(){
    song1=loadSound("Song1.mp3");
    song2=loadSound("song2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose", gotresult);
}
function modelloaded(){
    console.log("Model is loaded")
}
function gotresult(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    image(video,0,0,600,500)
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
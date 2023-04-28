noseX=0;
noseY=0;


function preload(){

    clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide()

    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes);
}
function draw(){
image(video,0,0,300,300)

image(clown_nose,noseX,noseY,28,28)


}

function take_snapshot(){
    save ("burger.png")
}

function modelloaded(){
    console.log("modelloaded")
}

function gotposes(results){
    if(results.length>0){
        console.log(
    results
        );
      noseX=results[0].pose.nose.x-16;
      noseY=results[0].pose.nose.y-16;
    }
}
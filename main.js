function setup(){
    video=createCapture(VIDEO);
    video.size(460,500);
    video.position(160,150);

    canvas=createCanvas(400,400);
    canvas.position(650,200);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("grey");}

    function modelLoaded(){
        console.log("PoseNet is Initialised");
    }
    
    function gotPoses(results){
        if(results.length>0){
            console.log(results);}
        }
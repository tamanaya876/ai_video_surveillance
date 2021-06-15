video = "";

function preload()
{
    //Creating video inside variable
    video = createVideo("video.mp4");
    //Hiding video
    video.hide();
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.position(485,220);
}

function start()
{
    //Inside variable putting ml5 function objectDetector inside it cocossd model is loaded and calling function modelLoaded
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    //Setting the status
    document.getElementById("status").innerHTML = "Status : Object Detection"
}

function modelLoaded()
{
    //Displaying Model Loaded in console
    console.log("Model Loaded!");
    //Marking the status true
    status = true;
    //Repeating the video
    video.loop();
    //Setting speed of video
    video.speed(1);
    //Setting volume of video
    video.volume(0);
}

function draw()
{
    //Displaying video in canvas
    image(video,0,0,300,300);
}
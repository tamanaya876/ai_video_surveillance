objects = [];
status = "";

function preload()
{
    //Creating video inside variable
    video = createVideo("video2.mp4");
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

function gotResults(error,results)
{
    if(error)
    {
        console.error(error);
    }

    else
    {
        console.log(results);
        objects = results;
    }
}

function draw()
{
    //Displaying video in canvas
    image(video,0,0,300,300);

    if(status != "")
    {
        objectDetector.detect(video,gotResults);
        for(i = 0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detection";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects = " + objects.length;

            fill('red');
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x + 15,objects[i].y + 15);
            noFill();
            stroke('red');
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
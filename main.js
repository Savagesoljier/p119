function setup() {
    canvas = createCanvas(300, 275);
    canvas.position(500, 120);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GRy6KBUJv/model.json", modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    image(video, 0, 0, 300, 300)
    classifier.classify(video, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        document.getElementById("resultObjectName").innerHTML = results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
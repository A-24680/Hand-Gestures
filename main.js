prediction1=""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    })
}

console.log('ml5version:',ml5.version);

classifer=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CwIsnalBF/model.json',modelLoaded);

function modelLoaded() {
    console.log('modelLoaded');
}

function speak() {
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is"+prediction1;
    var utterThis=new speachSynthesisUtterance(speak_data1);
    synth.speak(utterThis);
}
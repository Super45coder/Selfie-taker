var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var camera = document.getElementById("video");
Webcam.set({
    width:330, height:480, image_format:"jpeg", jpeg_quality:90
});

function ask(){
   document.getElementById("voice").value = "";
   recognition.start();
   document.getElementById("video").style.height = 400;
   document.getElementById("video").style.width = 330;
   Webcam.attach(camera);
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("voice").innerHTML = content;
    if(content == "take my selfie"){
        selfie = Webcam.snap(function(data_URI){
            document.getElementById("result").innerHTML = "<img src=" + '"' + data_URI + '"' + ">";
        })
    }
}

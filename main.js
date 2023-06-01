var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    setTimeout(function(){
        var imgeld = "selfie1";
        takeSelfie();
        speakData = "3 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);

        },3000);
    setTimeout(function(){
        var imgeld = "selfie2";
        takeSelfie();
        speakData = "5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    },5000);
    
}
function takeSelfie(){
    console.log(imgeld)
    Webcam.snap(function(data_uri){
        if(imgeld=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';    
        }
        if(imgeld=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';    
        }
    })
}
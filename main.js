Webcam.set({
  width:350,
  height:300,
  image_format : "png",
 png_quality:95
})

camera= document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='C_imgSt'src='"  +data_uri+"'>"
    })
}

classifiero=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Zbi7nVxCA/model.json", model_loaded);

function model_loaded(){
    console.log("model has been loaded");   
}

function Indentify_img(){
    s_image=document.getElementById("C_imgSt");
    classifiero.classify(s_image, getting_result);
}

function getting_result(error, result){
 if(error){
console.error(error);  
}
else{
 console.log(result)  
 document.getElementById("object_name").innerHTML=result[0].label; 
 document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
} }

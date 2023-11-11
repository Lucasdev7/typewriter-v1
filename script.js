var i = 0;
var content = "My simple text being typing";
var speed = 40;

function typeWriter(){
    if(i < content.length){
     document.getElementById("demo").innerHTML += content.charAt(i);
     i++;
     setTimeout(typeWriter, speed);
    }
}
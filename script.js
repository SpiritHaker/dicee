var images = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
function ima(){ 
var size = images.length;
var aa = Math.floor(size*Math.random());
document.getElementById("img1").src = images[aa];
var images2 = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var size2 = images2.length;
var aaa = Math.floor(size2*Math.random());
document.getElementById("img2").src = images2[aaa];
if(aa > aaa){
    document.getElementById("h").innerHTML = "Player1 Wins!";
}else if(aa === aaa){
    document.getElementById("h").innerHTML = "DRAW!"
}
else{
    document.getElementById("h").innerHTML = "Player2 Wins!";
}}
window.onload = ima;
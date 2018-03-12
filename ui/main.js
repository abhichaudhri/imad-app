console.log('Loaded!');
var img= document.getElementById("madi");
var marginLeft=0;
function moveRight () {
    moveLeft=moveLeft+10;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick = function() {
    var interval = setInterval(marginLeft,100);
}
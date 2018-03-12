console.log('Loaded!');
var img= document.getElementById("madi");
var marginLeft=0;
function marginRight () {
    marginLeft=moveLeft+10;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick = function() {
    var interval = setInterval(marginRight,100);
}
console.log('Loaded!');
var img= document.getElementById("madi");
img.onclick = function() {
    var interval = setInterval(marginLeft,100);
    img.style.marginLeft="100px";
}
console.log('Loaded!');
//change the text has been has been skipped
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 30;
}
img.onclick = function () {
    var interval = setInterval(moveRight, 300);
};




console.log('Loaded!');
//change the text has been has been skipped
//move the image
var img = document.getElementById('madi');
img.onclick = function () {
    var interval = setInterval(moveLeft, 300);
    img.style.marginLeft = '300px';
};


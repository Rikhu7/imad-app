console.log('Loaded!');
//change the text has been has been skipped
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 10);
};

//counter
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //make a request to the counter endpoint
    
   //capture the response and store it in a variable
   
   //render the variable in the correct span
   counter = counter + 1;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString();
} ;



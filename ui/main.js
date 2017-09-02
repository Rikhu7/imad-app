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
button.onclick = function() {
    //create a request
    var request = new XMLhttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          //take some action
          if(request.status === 200) {
                var counter = request.responseText;
                //render the variable in the correct span
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
          }
      }  
      //not done yet
    };
    //make a request
 
} ;



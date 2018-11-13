//console.log("yeah");
//window.scrollBy(100, 100);
//alert(window.pageXOffset + window.pageYOffset);

var counter = document.getElementById('counter');

window.onscroll = function(){
                  var distance = window.pageYOffset;
                  console.log(distance);
                  distance / 450;
                  document.getElementById('counter').innerHTML = Math.floor(distance / 450)+ "K";

                  if(distance > 2000){
                    counter.style.backgroundcolor ="red";
                  } else {
                    document.getElementById('counter').style.backgroundcolor ="navy";
                  }
                  }

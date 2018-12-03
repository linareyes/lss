
var walk = document.getElementById("walk");
function runAnimation(){
walk.classList.add("restart");
}

function stopAnimation(){
walk.classList.remove("restart");
}

// window.addEventListener('scroll', runAnimation);
window.addEventListener('scroll', runAnimation);
walk.addEventListener('animationend', stopAnimation);


/*cover*/

function toggle(){
  document.getElementById('clip').classList.toggle('active')
}

/*fireflies*/
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function Circle(x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "yellow";
    c.stroke();
  };

  this.update = function() {
    if (this.x + radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + radius > innerHeight || this.y - radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var radius = 0.5;
var circleArray = [];

for (var i = 0; i < 100; i++) {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;
  circleArray.push(new Circle(x, y, dx, dy));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();

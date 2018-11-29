
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







$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

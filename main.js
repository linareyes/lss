
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


function toggle(){
  document.getElementById('clip').classList.toggle('active')
}

$(document).on("ready", function() {
    setTimeout(function() {
        $(".letter").addClass("loaded");
        $(".reg-text").addClass("loaded");
    }, 1000);
});

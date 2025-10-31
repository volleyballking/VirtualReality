let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");

  let clone = mech.cloneNode(true)
 
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}

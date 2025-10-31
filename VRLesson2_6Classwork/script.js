let scene;
let gridSize = 10;
let spacing = 15;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");

   for (let i = 0; i < gridSize; i++) {
    for (let o = 0; o < gridSize; o++) {
      let x = (i - gridSize / 2) * spacing;  
      let z = (o - gridSize / 2) * spacing;  
      let y = Math.random() * -3 - 1;   
      let clone = mech.cloneNode(true);
      clone.setAttribute("id","mech-"+(i+2));
      clone.setAttribute("position",{x:x,y:13,z:z});
      scene.appendChild(clone);     
    }
  }
 
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}

let scene, car1;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  car1 = new Car(-4,0,-5);


      
  loop();
})

function loop(){
  car1.drive();
    
  window.requestAnimationFrame(loop);
}

function loop(){

  for(let i = 0; i < snowmen.length; i++){
    snowmen[i].update();
  }

  for(let i = 0; i < ufos.length; i++){
    ufos[i].update();
    // console.log("ufos[i].y: ", ufos[i].y);
  }

  for (let flake of snowflakes) {
    flake.fall();
  }

  window.requestAnimationFrame(loop);
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
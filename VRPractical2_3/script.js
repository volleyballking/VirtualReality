let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
  }

})

class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let puff1 = document.createElement("a-sphere");
    puff1.setAttribute("color","white");
    puff1.setAttribute("position","0 0 0");
    puff1.setAttribute("radius","1");
    this.obj.append( puff1 );

    let puff2 = document.createElement("a-sphere");
    puff2.setAttribute("color","white");
    puff2.setAttribute("position","1 0.5 0");
    puff2.setAttribute("radius","1.25");
    this.obj.append( puff2 );

    let puff3 = document.createElement("a-sphere");
    puff3.setAttribute("color","white");
    puff3.setAttribute("position","-1 0.5 0");
    puff3.setAttribute("radius","1");
    this.obj.append( puff3 );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
}
}

class House{
  constructor(x,z){
    this.obj = document.createElement("a-entity");

    let base = document.createElement("a-box");
    base.setAttribute("color","yellow");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("depth","1");
    base.setAttribute("height","1");
    base.setAttribute("width","1");
    this.obj.append( base );

    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color","red");
    roof.setAttribute("position","0 1.25 0");
    roof.setAttribute("radius","0.75");
    roof.setAttribute("height","1.2");
    roof.setAttribute("rotation","270 0 0");
    roof.setAttribute("segments-radial","3");
    this.obj.append( roof );

    this.obj.setAttribute("position",{x:x, y:0, z:z});
    scene.append( this.obj )
  }
}


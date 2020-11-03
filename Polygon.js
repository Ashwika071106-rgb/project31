class Polygon{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      //this.radius = radius;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("images/Polygon.png")
      this.width = width;
      this.height = height;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      stroke(0,0,139);
      strokeWeight(1);
      fill(181,211,231);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
  };
  
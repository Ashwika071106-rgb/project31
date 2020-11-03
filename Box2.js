class Box2 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(0,0,139);
        strokeWeight(1);
        fill(181,211,231);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);
          //push();
          this.Visibility -= 5;
          tint(255,this.Visibility);
          rect(0, 0, this.width, this.height);
          //pop();
        }
    }
    score(){
      if(this.Visibility<0 && this.Visibility>-1005){
        score++;
      }
    }
  };
  
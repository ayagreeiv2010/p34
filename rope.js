class Rope{
    constructor(A,B){
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.04,
            length: 10
        }
        this.point = B;
        this.pt= Constraint.create(options);
        World.add(world,this.pt);
    }
  
    hi(){
        this.pt.bodyA = null;
    }
  
      display(){
        if (this.pt.bodyA){
            var pointA = this.pt.bodyA.position;
            var pointB = this.point;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
  }
  
  
  
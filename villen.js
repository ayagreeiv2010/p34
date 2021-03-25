class Villen{
    constructor(x,y){
        var options = {
        isStatic:false,
  
        }
        this.body = Bodies.circle(x,y,70,options);
        this.width =this.body.circleRadius;
        this.height=this.body.circleRadius;
      this.image=loadImage("Villen.png")
        World.add(world, this.body);
    }
    display(){
        fill("red");
             var pos = this.body.position;
       imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }

}
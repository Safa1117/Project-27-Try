class Bob{
    constructor(x, y, r) {

        var options = {
            'restitution':0.3,
            'isStatic' : false,
            'friction':0,
            'density':1.2
        }


        this.x = x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        
        World.add(world, this.body);

      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        imageMode(CENTER);
        
        // strokeWeight(3);
        fill(255,0,255);        
        pop();
      }

}
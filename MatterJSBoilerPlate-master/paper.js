class Paper {
    constructor(x,y,r)
    {
        var options={
            restitution:0.3,
            friction:1.0,
            density:1.2
            }

        this.x=x;
        this.y=y;
        this.r=r
        this.body= Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);

    }
    display()
    {

            var paperpos=this.body.position;
            push();
            translate(paperpos.x, paperpos.y);
            fill(255,0,255)
            ellipseMode(CENTER);
            ellipse(this.body.position.x, this.body.position.y,this.r);
            pop();

    }
  }
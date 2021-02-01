class Box {

    constructor(x,y,height,angle){
        var options = {
            isStatic: true
        }
        this.bodies = Bodies.rectangle(x,y,20,height,angle,options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.bodies,angle);
        World.add(world,this.bodies);
    }

    display(){
        var pos = this.bodies.position;
        var angle = this.bodies.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}
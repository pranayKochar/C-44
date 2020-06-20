class Batsman {
    constructor(x, y) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
        this.width = 50;
        this.height = 50;
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop(); 
    }
}
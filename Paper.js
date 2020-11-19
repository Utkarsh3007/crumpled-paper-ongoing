class Paper {
    constructor(x, y,radius) {
        var option = {
        isStatic:false,
        density:1.2,
        resititution:0.3,
        friction:0.5
        }
        this.body = Matter.Bodies.circle(x, y,radius, option);
        this.body.radius=radius
        this.body.debug=true
        World.add(world, this.body);
        console.log(this.body.collider)
    }
    display() {
        var pos = this.body.position;
    
        ellipseMode(CENTER)
        fill("255,255,255")
        stroke("white")
        ellipse(pos.x,pos.y)                           
    }
}
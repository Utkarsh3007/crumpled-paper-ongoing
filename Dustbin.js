class Dustbin {
    constructor(x, y, width, height) {
        var option = {
        isStatic:true,
        density:20
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
    
        rectMode(CENTER)
        fill("255,255,255")
        stroke("white")
        rect(pos.x,pos.y, this.width, this.height)                           
    }
}
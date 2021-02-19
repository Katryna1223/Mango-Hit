class Sling{
    constructor(bodA, PointB){
        var options ={
            bodyA: bodA,
            pointB: PointB,
            stiffness: 0.005,
            length: 70
        }
        this.pointB = PointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling); 
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        Matter.Body.setPosition(body, {x: this.pointB.x, y: this.pointB.y + 70});
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(posA.x, posA.y, pointB.x, pointB.y);
        }
    }
}
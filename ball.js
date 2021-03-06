class Poligan{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 20;
        this.height = 30;
        this.image = loadImage("ball.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER); 
       image(this.image, this.body.position.x, this.body.position.y,100,100);
        pop();
      }
}
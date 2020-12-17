class Ball {
  constructor(x, y, r) {

    var options = {
      
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
    }
    this.ball = Bodies.circle(x, y, r, options);
    World.add(world, this.ball);
    this.r = r
    //this.ball.shapeColor=color("pink")
  }

  bounce() {
    ellipseMode(RADIUS);
    ellipse(this.ball.position.x, this.ball.position.y, this.r, this.r);
  }
}
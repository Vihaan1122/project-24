class hammer
{
    constructor(x,y)
    {
      var options={
        restitution:0.5,
        friction:1.0,
        density:2.0
    }
    this.body=Bodies.rectangle(x,y,80,30,options);
    this.width=80;
    this.height=30;
    World.add(world,this.body);
}
display()
{
    var pos=this.body.position;
    pos.x=mouseX;
    pos.y=mouseY;
    var angle=this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    stroke ("white");
    strokeWeight (3);
    fill ("yellow");
    rect (0,0,this.width,this.height);
    pop ();

    }
}
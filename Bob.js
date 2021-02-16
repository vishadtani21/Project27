class Bob {

    constructor(x,y,r)
    {

        var options = {

            isStatic:false,
            'restitution':1,
            'friction':1,
            'density':1

        };

        this.body=Bodies.circle (x,y,r/2, options);
        this.r=r;
        
        World.add(world,this.body);

    }

    display()
    {
        var pos=this.body.position;

        
        ellipseMode(CENTER);
        fill ("pink");
        ellipse(pos.x,pos.y,this.r, this.r);
        

    }

}

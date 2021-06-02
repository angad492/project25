class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false
            "restitution":0.3
            'friction':0.5
            'density':1.2

			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("paper.png")
        this.body=bodies.circle(x,y,radius,options)
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;	
            circle(this.body.position.x ,this.body.position.y ,this.radius)	
			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("black");
			rect(this.w , this.h);
			pop()
			
	}

}
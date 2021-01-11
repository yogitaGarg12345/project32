class Ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		
		this.width=width
		this.height=height
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			//translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(0)
			rect(groundPos.x,groundPos.y,this.width, this.height);
			pop()
			
	}

}
